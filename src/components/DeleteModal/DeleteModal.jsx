import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IconContext } from 'react-icons';
import css from './DeleteModal.module.css';

Modal.setAppElement('#root');

export const DeleteModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  selectedItem: { id },
  handleDelete,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        className={css.modal}
        overlayClassName={css.backdrop}
      >
        <IconContext.Provider value={{ size: '2.5em', color: '#0d47a1' }}>
          <button onClick={onRequestClose} className={css.closeButton}>
            <IoMdCloseCircleOutline />
          </button>
        </IconContext.Provider>

        <div className={css.container}>
          <p className={css.desc}>Do you really want to delete this contact?</p>
          <div className={css.buttons}>
            <button
              className={css.button}
              onClick={() => {
                handleDelete(id), onRequestClose();
              }}
            >
              Yes
            </button>
            <button onClick={onRequestClose} className={css.button}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
