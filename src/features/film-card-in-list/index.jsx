import s from "./FilmCardInList.module.css";
import Icon from "@mdi/react";
import { mdiStarShootingOutline } from "@mdi/js";

export default function FilmCardInList({ film }) {
  return (
    <div className={s.card}>
      <div className={s.title}>{film.name}</div>
      <img
        src={film.poster.previewUrl}
        alt={film.name}
        className={s.picture}
      />
      <div className={s.rating}>
        <Icon
          path={mdiStarShootingOutline}
          size={1}
        />
        <div>{film.rating.kp.toFixed(2)}</div>
      </div>
    </div>
  );
}
