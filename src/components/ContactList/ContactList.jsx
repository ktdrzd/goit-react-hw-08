import { selectVisibleContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = ({ openPatchModal, openDeleteModal }) => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact
            contact={contact}
            openDeleteModal={() => openDeleteModal(contact)}
            openPatchModal={() => openPatchModal(contact)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
