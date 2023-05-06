import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

export function Header(){
    const { signOut } = useAuth();



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

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}