import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Card, AlbumImage, AlbumTitle, ArtistName, TrackList, StatusMessage } from "./AlbumWithTrack.styles";

function AlbumWithTracks({ album }) {
    const dispatch = useDispatch();

    const [showTracks, setShowTracks] = useState(false);

    const tracksUrl = showTracks ? `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${album.idAlbum}` : null;

    const { data, loading, error } = useFetch(tracksUrl);

    const handleAdd = (track) => {
        const newSong = {
            idTrack: track.idTrack,
            strTrack: track.strTrack,
            strAlbum: album.strAlbum,
            strArtist: album.strArtist,
            strAlbumThumb: album.strAlbumThumb
        };
        dispatch(addSong(newSong));
        alert("Canción añadida!")
    }

    return(
        <Card $active={showTracks}>
            <AlbumTitle>{album.strAlbum}</AlbumTitle>
            <ArtistName>{album.strArtist}</ArtistName>
            <AlbumImage src={album.strAlbumThumb} alt={album.strAlbum} />

            <button onClick={() => setShowTracks(!showTracks)}>
                {showTracks ? "Ocultar canciones" : "Mostrar canciones"}
            </button>

            {showTracks && data?.track && (
                <TrackList>
                    {data.track.map((track) => (
                        <li key={track.idTrack}>
                            <Link to={`/song/${track.idTrack}`}>
                                {track.intTrackNumber}. {track.strTrack}
                            </Link>
                            <button 
                                onClick={() => handleAdd(track)}
                                style={{ marginLeft: '10px', fontSize: '0.8rem' }}
                            >
                                Añadir
                            </button>
                        </li>
                    ))}
                </TrackList>
            )}
        </Card>
    );
}    

export default AlbumWithTracks;