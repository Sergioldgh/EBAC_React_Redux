import styled from 'styled-components';

export const SearchForm = styled.form`
    display: flex;
    justify-content: center; /* Centra horizontalmente el contenido */
    align-items: center;     /* Alinea verticalmente el input y el botón */
    gap: 12px;               /* Espacio entre el input y el botón */
    margin: 20px 0;
    width: 100%;
`;

export const StyledInput = styled.input`
    padding: 10px 15px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 25px;     /* Bordes redondeados para un look moderno */
    width: 100%;
    max-width: 400px;        /* Evita que el input sea demasiado ancho */
    outline: none;

    &:focus {
        border-color: ${props => props.theme.colors.primary};
    }
`;

export const SearchButton = styled.button`
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #169c46; /* Un tono un poco más oscuro al pasar el mouse */
    }
`;