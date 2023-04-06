import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  height: 10.5rem;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;


 @media(min-width: 375px) and (max-width: 800px){
   padding: 2rem;
 }
`;

export const Profile = styled.div`
 display: flex;
 align-items: center;

 > img {
   height: 5.6rem;
   width: 5.6rem;
   border-radius: 9999px ;
 }

 > div{
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
  line-height: 2.4rem
 }

 span{
  font-size: 1.4rem;
  color: solid ${({theme}) => theme.COLORS.GRAY_100};
 }

 b{
  font-size: 1.8rem;
  color: solid ${({theme}) => theme.COLORS.WHITE};
 }

 @media(min-width: 375px)and (max-width: 800px){
    b{
      font-size: 1.6rem;
    }
  }
`;


export const Logout = styled.button`
 border: none;
 background: none;

 > svg{
   font-size: 3.6rem;
   color: ${({ theme }) => theme.COLORS.GRAY_100};
  }


  @media(min-width: 375px)and (max-width: 800px){
    > svg{
   font-size: 2.5rem;
  }
  }


  
`;