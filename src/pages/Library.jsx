import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../redux/libraryActions";
import styled from "styled-components";

const LibContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
`;

function Library() {
    const songs = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <LibContainer>
            <h2>Mi Biblioteca Personal</h2>
            {songs.length === 0 ? (
                <p>No has agregado canciones aún.</p>
            ) : (
                <ul>
                    {songs.map(song => (
                        <li key={song.idTrack} style={{ marginBottom: '10px' }}>
                            <strong>{song.strTrack}</strong> - {song.strArtist} ({song.strAlbum})
                            <button 
                                onClick={() => dispatch(removeSong(song.idTrack))}
                                style={{ marginLeft: '15px', color: 'red' }}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </LibContainer>
    );
}

export default Library