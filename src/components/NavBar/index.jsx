import Logo from '../../assets/logo.jpg'
import { NavBar } from "./styles";
export default function Header () {
    return (
        <>
            <NavBar>
                <img src={Logo} alt="Victor Pires Logo" />
            </NavBar>
        </>
    );
};


