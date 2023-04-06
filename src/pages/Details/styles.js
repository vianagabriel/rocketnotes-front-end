import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  //definindo diplay como grid
  display: grid;
  //definindo quantas linhas vão ter.
  grid-template-rows: 10.5rem auto;
  //definindo os nomes das regiões.
  grid-template-areas:
  'header'
  'content';

  > main{
    grid-area: content;
    overflow-x: scroll;
    padding: 6.4rem 0;
  }

  @media(min-width: 375px) and (max-width: 600px){
    main{
      margin: 2rem;
    }
  }
`;


export const Links = styled.ul`
  list-style: none;
  
  > li{
    margin-top: 1.2rem;
  }

  a{
    color: ${({ theme }) => theme.COLORS.WHITE}
  }
`;

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column ;

  > button:first-child{
    align-self: end
  }

  > h1{
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 6.4rem;
  }

  > p{
    font-size: 1.6rem;
    margin-top: 1.6rem;
    text-align: justify;
  }
`;


