import Search from "@/components/search";
import { useState } from "react";

const SortOptions = Object.freeze({
  RATING: "Сначала с лучшей оценкой",
  LONGEST: "Сначала длинные",
  SHORTEST: "Сначала короткие",
  NEWEST: "Сначала новые",
  OLDEST: "Сначала старые",
});

export default function FilmSearch({ films, setFilms }) {
  const [selectedSort, setSelectedSort] = useState(null);

  function onSort(sortOption) {
    setSelectedSort(sortOption);

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

    const sortedFilms =
      sortOption && Array.isArray(films)
        ? [...films].sort((a, b) => filmComparator(a, b))
        : films;

    if (Array.isArray(sortedFilms)) {
      setFilms(sortedFilms);
    }
  }

  return (
    <Search
      selectedSort={selectedSort}
      sortOptions={Object.values(SortOptions)}
      onSelectSort={onSort}
    />
  );
}
