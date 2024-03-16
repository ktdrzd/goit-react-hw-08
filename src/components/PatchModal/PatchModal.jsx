import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IconContext } from 'react-icons';
import css from './PatchModal.module.css';

Modal.setAppElement('#root');

const validation = Yup.object().shape({
  name: Yup.string().min(3, 'Not enough symbols!').max(50, 'Too long!').required('Required field!'),
  number: Yup.string()
    .min(9, 'Not enough symbols!')
    .max(9, 'Too long!')
    .required('Required field!'),
});

export const PatchModal = ({ isOpen, onAfterOpen, onRequestClose, selectedItem, handlePatch }) => {
  const nameField = useId();
  const numberField = useId();

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
          <button className={css.closeButton} onClick={onRequestClose}>
            <IoMdCloseCircleOutline />
          </button>
        </IconContext.Provider>
        <div className={css.container}>
          <Formik
            initialValues={{
              name: selectedItem.name,
              number: selectedItem.number,
            }}
            onSubmit={(values, actions) => {
              handlePatch({ id: selectedItem.id, ...values }), onRequestClose();
            }}
            validationSchema={validation}
          >
            <Form className={css.form}>
              <div className={css.item}>
                <label className={css.label} htmlFor={nameField}>
                  Name
                </label>
                <Field className={css.input} type="text" name="name" id={nameField} />
                <ErrorMessage className={css.error} name="name" component="span" />
              </div>
              <div className={css.item}>
                <label className={css.label} htmlFor={numberField}>
                  Phone
                </label>
                <Field className={css.input} type="text" name="number" id={numberField} />
                <ErrorMessage className={css.error} name="number" component="span" />
              </div>
              <button className={css.button} type="submit">
                Change contact
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default PatchModal;
