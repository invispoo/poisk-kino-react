import Search from "@/components/search";

const SortOptions = Object.freeze({
  RATING: "Сначала с лучшей оценкой",
  LONGEST: "Сначала длинные",
  SHORTEST: "Сначала короткие",
  NEWEST: "Сначала новые",
  OLDEST: "Сначала старые",
});

export default function FilmSearch({ films, setFilms }) {
  function onSort(sortOption) {
    function handleSort(a, b) {
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
        ? [...films].sort((a, b) => handleSort(a, b))
        : films;

    if (Array.isArray(sortedFilms)) {
      setFilms(sortedFilms);
    }
  }

  return (
    <Search
      sortOptions={Object.values(SortOptions)}
      onSelectSort={onSort}
    />
  );
}
