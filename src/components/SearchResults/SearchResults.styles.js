import styled from 'styled-components';

export const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
    gap: 25px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
`;

export const Message = styled.p`
    color: ${props => props.error ? props.theme.colors.error : props.theme.colors.primary};
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
`;