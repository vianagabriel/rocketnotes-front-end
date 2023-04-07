import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile to='/profile'>
                <img src="https://github.com/vianagabriel.png" 
                alt="foto do susário" />

                <div>
                    <span>Bem-vindo</span>
                    <b>Gabriel Viana</b>
                </div>

            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}