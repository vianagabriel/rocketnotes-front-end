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

`;