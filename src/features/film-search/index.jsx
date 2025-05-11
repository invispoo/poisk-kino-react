import Search from "@/components/search";
import { useState } from "react";
import s from "./FilmSearch.module.css";

const SortOptions = Object.freeze({
  RATING: "Сначала с лучшей оценкой",
  LONGEST: "Сначала длинные",
  SHORTEST: "Сначала короткие",
  NEWEST: "Сначала новые",
  OLDEST: "Сначала старые",
});

export default function FilmSearch({ filmsSnapshot, films, setFilms }) {
  const [selectedSort, setSelectedSort] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  function onSearch(e) {
    setSearchQuery(e.target.value);

    if (e.target.value) {
      setFilms(
        [...films].filter((film) =>
          film.name.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      );
    } else {
      setFilms(filmsSnapshot);
    }
  }

  function onSort(sortOption) {
    function filmComparator(a, b) {
      switch (sortOption) {
        case SortOptions.RATING:
          return b.rating.kp - a.rating.kp;
        case SortOptions.LONGEST:
          return b.movieLength - a.movieLength;
        case SortOptions.SHORTEST:
          return a.movieLength - b.movieLength;
        case SortOptions.NEWEST:
          return b.year - a.year;
        case SortOptions.OLDEST:
          return a.year - b.year;
        default:
          return 0;
      }
    }

    if (selectedSort !== sortOption) {
      setSelectedSort(sortOption);
      setFilms([...films].sort((a, b) => filmComparator(a, b)));
    } else {
      setSelectedSort(null);
      setFilms(filmsSnapshot);
    }
  }

  return (
    <div className={s["film-search"]}>
      <Search
        searchQuery={searchQuery}
        selectedSort={selectedSort}
        sortOptions={Object.values(SortOptions)}
        onSelectSort={onSort}
        onSearchInput={onSearch}
      />
    </div>
  );
}
