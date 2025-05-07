import data from "@assets/kinopoisk.json";
import FilmCardInList from "@features/film-card-in-list";
import s from "./FilmList.module.css";

export default function FilmList() {
  const films = data.docs;
  const filmCards = films.map((film) => (
    <FilmCardInList
      film={film}
      key={film.id}
    />
  ));

  return <div className={s.list}>{filmCards}</div>;
}
