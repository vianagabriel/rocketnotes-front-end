import styled from 'styled-components';
import { Link } from 'react-router-dom';

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


export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  > img {
    width: 56px;
    width: 56px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    b {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 18px;
    } 
  };

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