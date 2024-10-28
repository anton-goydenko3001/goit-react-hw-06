import { useDispatch } from "react-redux";
import style from "./Contact.module.css";
import { PiPhoneBold, PiUserBold } from "react-icons/pi";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={style.mainContainer}>
      <div className={style.itemContainer}>
        <p>
          <PiUserBold className={style.icon} />
          {contact.name}
        </p>
        <p>
          <PiPhoneBold className={style.icon} />
          {contact.number}
        </p>
      </div>
      <button className={style.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
