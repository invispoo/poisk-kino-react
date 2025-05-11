import s from "./Dropdown.module.css";

export default function Dropdown({ options }) {
  return (
    <div className={s.dropdown}>
      {options.map((option) => (
        <div className={s[`dropdown-item`]}>{option}</div>
      ))}
    </div>
  );
}
