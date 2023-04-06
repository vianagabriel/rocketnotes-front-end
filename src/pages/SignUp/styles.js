import styled from 'styled-components';
import backgroundImg from '../../assets/Background.png';


export const Container = styled.div`
 height: 100vh;
 display:flex;
 justify-content: center;

 @media(min-width: 800px){
    align-items: stretch;

}
`;


export const Form = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;

 > h1{
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
 }


 > h2{
    font-size: 2.4rem;
    margin-top: 8.4rem;
    margin-bottom: 2.4rem;
 }


 > p{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
 } 

 > a {
     margin-top: 12.3rem;
     color: ${({ theme }) => theme.COLORS.ORANGE};
 }

@media(min-width: 800px){
 padding: 0 13.6rem;

}
`;


export const Background = styled.div`
 display: none;


@media(min-width: 1000px){
    display: block;
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
}

`;