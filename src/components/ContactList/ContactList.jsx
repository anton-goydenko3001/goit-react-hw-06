import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={style.mainContainer}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contactsData={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
