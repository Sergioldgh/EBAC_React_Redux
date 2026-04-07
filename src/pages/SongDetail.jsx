import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { 
    DetailWrapper, 
    BackLink, 
    SongTitle, 
    InfoText, 
    StatusWrapper 
} from "./SongDetail.styles";

function SongDetail() {
    const { id } = useParams();

    const url = `https://www.theaudiodb.com/api/v1/json/123/track.php?h=${id}`;
    const { data, loading, error, refetch } = useFetch(url);

    if (loading) {
        return <StatusWrapper>Cargando canción...</StatusWrapper>;
    }

    if (error) {
        return (
        <StatusWrapper $isError>
            <p>Hubo un problema al cargar la canción.</p>
            <button onClick={refetch}>Reintentar</button>
        </StatusWrapper>
        );
    }

    if (!data || !data.track) {
        return <StatusWrapper>Canción no encontrada.</StatusWrapper>;
    }

    const song = data.track[0];

    return (
        <DetailWrapper>
        <BackLink to="/">
            Volver al inicio
        </BackLink>

        <SongTitle>{song.strTrack}</SongTitle>

        <InfoText>
            <strong>Artista:</strong> {song.strArtist}
        </InfoText>

        <InfoText>
            <strong>Álbum:</strong> {song.strAlbum}
        </InfoText>
        </DetailWrapper>
    );
}

export default SongDetail;