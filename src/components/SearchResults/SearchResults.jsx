import useFetch from "../../hooks/useFetch";
import AlbumWithTrack from "../AlbumWithTrack/AlbumWithTrack";
import { ResultsGrid, Message } from "./SearchResults.styles";

function SearchResults({ artist }) {
    const url = `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artist}`;
    const { data, loading, error, refetch } = useFetch(url);

    if (loading) return <Message>Cargando resultados...</Message>;

    if (error) return (
    <div style={{ textAlign: 'center' }}>
        <Message error>Hubo un problema al cargar los datos.</Message>
        <button onClick={refetch}>Reintentar</button>
    </div>
    );

    if (!data || !data.album) {
        return <Message>No se encontraron resultados para "{artist}".</Message>;
    }

    // console.log("Cantidad de álbumes encontrados:", data.album.length);
    // console.log("Lista de álbumes:", data.album);

    return (
        <ResultsGrid>
        {data.album.map((album) => (
            <AlbumWithTrack key={album.idAlbum} album={album} />
        ))}
        </ResultsGrid>
    );
}

export default SearchResults;