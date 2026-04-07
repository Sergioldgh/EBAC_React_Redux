import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.primary};
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

export const Logo = styled(Link)`
    color: ${props => props.theme.colors.white};
    font-size: 1.4rem;
    font-weight: bold;
    padding-right: 10px;
`;

export const NavLink = styled(Link)`
    color: ${props => props.theme.colors.white};
    font-size: 1.4rem;
    font-weight: bold;
    padding-left:10px;
`;