import styled from 'styled-components';
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";

const PageContainer = styled.div`
    padding: 20px;
    max-width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

    function Home({ artist, setArtist }) {
    return (
        <PageContainer>
            <SearchBar value={artist} onSearch={setArtist} />
            {artist && <SearchResults artist={artist} />}
        </PageContainer>
    );
}

export default Home;