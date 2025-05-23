import s from "./Search.module.css";
import Icon from "@mdi/react";
import { mdiFilterCogOutline } from "@mdi/js";
import { useState } from "react";
import Dropdown from "@components/dropdown";

export default function Search({
  searchQuery,
  selectedSort,
  sortOptions,
  onSelectSort,
  onSearchInput,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={s.search}>
      <input
        className={s.input}
        value={searchQuery}
        onInput={(e) => onSearchInput(e)}
      />
      <div
        className={s["filter-button"]}
        onClick={toggleDropdown}
      >
        <Icon
          path={mdiFilterCogOutline}
          size={1}
        />
      </div>
      {isDropdownOpen && (
        <Dropdown
          selectedOption={selectedSort}
          options={sortOptions}
          onSelectOption={onSelectSort}
        />
      )}
    </div>
  );
}
