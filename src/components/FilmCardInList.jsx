import "./FilmCardInList.css";
import Icon from "@mdi/react";
import { mdiStarShootingOutline } from "@mdi/js";

export default function FilmCardInList({ film }) {
  return (
    <div className="card">
      <div className="title">{film.name}</div>
      <img
        src={film.poster.previewUrl}
        alt={film.name}
        className="picture"
      />
      <div className="rating">
        <Icon path={mdiStarShootingOutline} size={1} />
        <div>{film.rating.kp}</div>
      </div>
    </div>
  );
}
