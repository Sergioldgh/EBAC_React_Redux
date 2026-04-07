import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { GlobalStyle } from "./styles/GlobalStyles";
import Library from "./pages/Library";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";

function App() {
  const [artist, setArtist] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home artist={artist} setArtist={setArtist} />} />
          <Route path="/library" element={<Library />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;