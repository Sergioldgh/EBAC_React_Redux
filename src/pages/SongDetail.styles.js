import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailWrapper = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 40px;
    background: ${props => props.theme.colors.white};
    border-radius: 15px;
    box-shadow: ${props => props.theme.shadows.medium};
    text-align: center;
`;

export const BackLink = styled(Link)`
    display: inline-block;
    margin-bottom: 25px;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    font-size: 0.9rem;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
        text-decoration: underline;
    }
`;

export const SongTitle = styled.h2`
    font-size: 2.2rem;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 20px;
`;

export const InfoText = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};
    margin: 10px 0;

    strong {
        color: ${props => props.theme.colors.primary};
    }
`;

export const StatusWrapper = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 1.2rem;
    color: ${props => props.$isError ? props.theme.colors.error : props.theme.colors.primary};
`;