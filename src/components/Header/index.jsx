import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;



    return(
        <Container>
            <Profile to='/profile'>
                <img src={avatarUrl}
                alt="foto do susário" />

                <div>
                    <span>Bem-vindo</span>
                    <b>{user.name}</b>
                </div>

            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}