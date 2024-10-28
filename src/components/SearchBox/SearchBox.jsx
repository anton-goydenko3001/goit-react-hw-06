import style from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={style.mainContainer}>
      <p>Find contacts by name</p>
      <input
        className={style.inputContainer}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
