import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact: { name, number, id }, openDeleteModal, openPatchModal }) => {
  return (
    <div className={css.item}>
      <div className={css.info}>
        <p className={css.user}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <button onClick={() => {openDeleteModal()}} className={css.button}>
        Delete
      </button>
      <button onClick={() => {openPatchModal()}} className={css.button}>
        Edit
      </button>
    </div>
  );
};

export default Contact;
