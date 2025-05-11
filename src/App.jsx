import { useState } from "react";
import "./App.css";
import FilmList from "@features/film-list";
import FilmSearch from "@features/film-search";
import data from "@assets/kinopoisk.json";

function App() {
  const filmsSnapshot = data.docs;
  const [films, setFilms] = useState(data.docs);

  return (
    <>
      <FilmSearch
        films={films}
        filmsSnapshot={filmsSnapshot}
        setFilms={setFilms}
      />
      <FilmList films={films} />
    </>
  );
}

export default App;
