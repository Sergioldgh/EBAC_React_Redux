import { StyledHeader, Logo, NavLink } from "./Header.styles";

function Header() {
    return (
        <StyledHeader>
            <Logo to="/">Libreria Musical</Logo>
            <NavLink to="/library">Mi Biblioteca</NavLink>
        </StyledHeader>
    );
}

export default Header;