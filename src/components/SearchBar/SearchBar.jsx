import { SearchForm, StyledInput, SearchButton } from "./SearchBar.styles";

function SearchBar({ value, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            onSearch(value.trim());
    }
    };

    return (
    <SearchForm onSubmit={handleSubmit}>
        <StyledInput
            type="text"
            placeholder="Busca un artista..."
            value={value}
            onChange={(e) => onSearch(e.target.value)}
        />
        <SearchButton type="submit">Buscar</SearchButton>
    </SearchForm>
    );
}

export default SearchBar;