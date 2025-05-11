import s from "./Dropdown.module.css";

export default function Dropdown({ selectedOption, options, onSelectOption }) {
  return (
    <div className={s.dropdown}>
      {options.map((option) => (
        <div
          className={`${s[`dropdown-item`]} ${selectedOption === option ? s.selected : ""}`}
          onClick={() => onSelectOption(option)}
          key={option}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
