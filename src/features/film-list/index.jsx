import FilmCardInList from "@features/film-card-in-list";
import s from "./FilmList.module.css";

export default function FilmList({ films }) {
  const filmCards = films.map((film) => (
    <FilmCardInList
      film={film}
      key={film.id}
    />
  ));

  return <div className={s.list}>{filmCards}</div>;
}
