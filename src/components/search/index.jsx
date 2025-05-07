import s from "./Search.module.css";
import Icon from "@mdi/react";
import { mdiFilterCogOutline } from "@mdi/js";

export default function Search() {
  return (
    <div className={s.search}>
      <input className={s.input} />
      <div className={s["filter-button"]}>
        <Icon
          path={mdiFilterCogOutline}
          size={1}
        />
      </div>
    </div>
  );
}
