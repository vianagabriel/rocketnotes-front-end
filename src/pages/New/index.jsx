import { useState } from "react";
import { Container, Form } from "./styles";

import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from '../../components/Section';
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";


export function New() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();


  function handleAddLink() {
    if (newLink == '') return;

    setLinks(prevState => [...prevState, newLink])
    setNewLink('')

  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    if (newTag == '') return;

    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {

    if(!title){
      return alert('Digite o titulo da nota.')
    }

    if(newLink){
      return alert('Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.')
    }

    if(newTag){
      return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.')
    }

    
    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })
    alert('Nota criada com sucesso')
    navigate('/')
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder='Titulo'
            onChange={e => setTitle(e.target.value)}

          />

          <Textarea
            placeholder='Observações'
            onChange={e => setDescription(e.target.value)}
          />

          <Section title='Links úteis'>
            {
              links.map((link, i) => (
                <NoteItem
                  key={String(i)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }

            <NoteItem
              isNew
              placeholder='Novo link'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />

          </Section>

          <Section title='Marcadores'>
            <div className="tags">

              {
                tags.map((tag, i) => (
                  <NoteItem
                    key={String(i)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder='Nova Tag'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button
            title='Salvar'
            onClick={handleNewNote}
          />
        </Form>
      </main>

    </Container>
  )
}