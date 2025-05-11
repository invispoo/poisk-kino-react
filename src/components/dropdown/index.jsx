import s from "./Dropdown.module.css";

export default function Dropdown({ options, onSelectOption }) {
  return (
    <div className={s.dropdown}>
      {options.map((option) => (
        <div
          className={s[`dropdown-item`]}
          onClick={() => onSelectOption(option)}
          key={option}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
