import styled from 'styled-components';


export const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: grid;
 grid-template-rows: 10.5rem auto;
 grid-template-areas: 
 'header' 
 'content';

 > main{
  grid-area: content;
  overflow-y: auto;
 }

 .tags{
  display: flex;
  gap: 1.9rem;
  flex-wrap: wrap;
 }

 @media(min-width: 375px)and (max-width: 600px){
   > main{
    margin: 2rem;
   }
 }
`;

export const Form = styled.form`
  max-width: 55rem;
  margin: 2.8rem auto;

  > header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.6rem;

    a{
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`;