import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IconContext } from 'react-icons';
// import css from "./DeleteModal.module.css";

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
        // overlayClassName={}
      >
        <IconContext.Provider value={{ size: '2.5em', color: '#0d47a1' }}>
          <button onClick={onRequestClose}>
            <IoMdCloseCircleOutline />
          </button>
        </IconContext.Provider>

        <div>
          <p>Do you really want to delete this contact?</p>
          <div>
            <button
              onClick={() => {
                handleDelete(id), onRequestClose();
              }}
            >
              Yes
            </button>
            <button onClick={onRequestClose}>No</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
