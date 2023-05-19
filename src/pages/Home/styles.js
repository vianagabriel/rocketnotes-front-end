import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Conatiner = styled.div`
  margin: 0 3rem;

  @media(min-width: 800px){
  margin: 0;
  width: 100%;
  height: 100vh; 
  display: grid;
  //declarando os tamanhos e quantidades de coluna.
  grid-template-columns: 25rem auto;
  //declarando os tamanhos e quantidades de linhas.
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  //informando ao css como vai ser o posicionamento de cada area.
  grid-template-areas:
  'brand header'
  'menu search'
  'menu content'
  'newnote content';
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

`;

export const Brand = styled.div`
> h1 {
    display: none;
  }

   @media(min-width:800px){
   grid-area: brand;
   display: flex;
   justify-content: center;
   align-items: center;
   border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
   background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   > h1 {
    display: initial;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};

  }
  }

`;

export const Menu = styled.ul`
 display: flex;
 justify-content: space-evenly;
 flex-wrap: wrap;
 gap: 1rem;
 align-items: center;
 margin-top: 6rem;
  
  @media(min-width:800px){
    flex-direction: column;
    gap: 0;
    margin-top:0 ;
    justify-content: initial;
    grid-area: menu;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding-top: 6.4rem;
    text-align: center;
    margin-top:0 ;

  > li {
    margin-bottom: 2.4rem;
  }

 }
`;

export const Search = styled.div`
 margin-top: 7rem;
  
  @media(min-width:800px){
    margin-top:0 ;
    grid-area: search;
    padding: 6.4rem 6.4rem 0;
 }

`;

export const Content = styled.div` 
  overflow-y: auto;
  height: 300px;
  margin-top:3rem;

 @media(min-width:800px){
  grid-area: content;
  height: auto;
  padding: 0 6.4rem;
  margin-top: 0;
 }
`;

export const NewNote = styled(Link)`
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  padding: 1rem;
  width: 25rem;
  margin: 5rem auto;
  border-radius: .5rem;

 @media(min-width:800px){
  grid-area: newnote;
  padding: none;
  width: none;
  margin: 0;
  border-radius: 0;
  height: initial;
 }
`;