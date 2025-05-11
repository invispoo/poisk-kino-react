import Search from "@/components/search";
import { useEffect, useState, useCallback } from "react";
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
    updateFilms();
  }

  function onSort(sortOption) {
    if (selectedSort !== sortOption) {
      setSelectedSort(sortOption);
    } else {
      setSelectedSort(null);
    }
    updateFilms();
  }

  const filmFilter = useCallback(
    (film) => {
      return searchQuery ? film.name.toLowerCase().includes(searchQuery) : true;
    },
    [searchQuery],
  );

  const filmComparator = useCallback(
    (a, b) => {
      switch (selectedSort) {
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
    },
    [selectedSort],
  );

  const updateFilms = useCallback(() => {
    setFilms(
      filmsSnapshot
        .filter((film) => filmFilter(film))
        .sort((a, b) => filmComparator(a, b)),
    );
  }, [filmComparator, filmFilter, filmsSnapshot, setFilms]);

  useEffect(() => updateFilms(), [searchQuery, selectedSort, updateFilms]);

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
