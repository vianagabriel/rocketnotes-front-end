import { Container, Profile } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/vianagabriel.png" 
                alt="foto do susário" />

                <div>
                    <span>Bem-vindo</span>
                    <b>Gabriel Viana</b>
                </div>
            </Profile>
        </Container>
    )
}