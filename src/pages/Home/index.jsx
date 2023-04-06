import { Conatiner, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import { FiPlus, FiSearch } from 'react-icons/fi';



export function Home() {
  return (
    <Conatiner>
      <Header />
      
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>


      <Menu>
        <li>
          <ButtonText isActive title='Todos'/>
        </li>

        <li>
          <ButtonText title='React' />
        </li>

        <li>
          <ButtonText title='Node' />
        </li>

      </Menu>

      <Search>
        <Input type='text' placeholder='Pesquisar pelo titulo' icon={FiSearch}/>
      </Search>

      <Content>
        <Section title='Minhas notas'/>

        <Note data={{
          title: 'Aplicando middleware',
          tags:[
            {id: '1', name: 'express' },
            {id: '2', name: 'jwt' },
          ]
        }}/>
        <Note data={{
          title: 'React',
          tags:[
            {id: '1', name: 'react' },
            {id: '2', name: 'node' },
          ]
        }}/>
        <Note data={{
          title: 'React',
          tags:[
            {id: '1', name: 'react' },
            {id: '2', name: 'node' },
          ]
        }}/><Note data={{
          title: 'React',
          tags:[
            {id: '1', name: 'react' },
            {id: '2', name: 'node' },
          ]
        }}/><Note data={{
          title: 'React',
          tags:[
            {id: '1', name: 'react' },
            {id: '2', name: 'node' },
          ]
        }}/><Note data={{
          title: 'React',
          tags:[
            {id: '1', name: 'react' },
            {id: '2', name: 'node' },
          ]
        }}/><Note data={{
          title: 'React',
          tags:[
            {id: '1', name: 'react' },
            {id: '2', name: 'node' },
          ]
        }}/>
        

      </Content>

      <NewNote>
        <FiPlus/>
        Criar nota

      </NewNote>

    </Conatiner>
  )
}