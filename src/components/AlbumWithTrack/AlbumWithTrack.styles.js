import styled from 'styled-components';

export const Card = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 20px;
    border-radius: 12px;
    box-shadow: ${props => props.theme.shadows.light};
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    transition: all 0.2s ease;
    border: 2px solid ${props => props.$active ? props.theme.colors.primary : 'transparent'};

    &:hover {
        transform: translateY(-5px);
        box-shadow: ${props => props.theme.shadows.medium};
    }
`;

export const AlbumImage = styled.img`
    width: 120px;           /* Tamaño pequeño deseado */
    height: 120px;
    object-fit: cover;      /* Mantiene la proporción de la imagen */
    border-radius: 8px;
    margin: 10px 0;
  /* Eliminamos el padding-right para que no se descentre */
`;

export const AlbumTitle = styled.h3`
    margin: 10px 0 5px 0;
    color: ${props => props.theme.colors.primary};
    font-size: 1.1rem;
`;

export const ArtistName = styled.p`
    margin: 0 0 15px 0;
    color: #0505fd;
    font-size: 0.9rem;
    font-weight: bold;
`;

export const TrackList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 10px;
`;

export const StatusMessage = styled.p`
    color: ${props => props.variant === 'loading' ? props.theme.colors.primary : props.theme.colors.error};
    font-weight: bold;
    text-align: center;
`;