import style from "./Contact.module.css";
import { PiPhoneBold, PiUserBold } from "react-icons/pi";

export default function Contact({
  contactsData: { id, name, number },
  onDelete,
}) {
  return (
    <div className={style.mainContainer}>
      <div className={style.itemContainer}>
        <p>
          <PiUserBold className={style.icon} />
          {name}
        </p>
        <p>
          <PiPhoneBold className={style.icon} />
          {number}
        </p>
      </div>
      <button className={style.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
