import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { deleteContact, patchContact } from '../redux/contacts/operations';
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import DeleteModal from '../components/DeleteModal/DeleteModal';
import PatchModal from '../components/PatchModal/PatchModal';
import toast from 'react-hot-toast';

export default function ContactsPage() {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [patchModalIsOpen, setPatchModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoad(true);
    setError(false);
    dispatch(fetchContacts())
      .unwrap()
      .then(() => setLoad(false))
      .catch(() => setError(true));
  }, [dispatch]);

  const handleDelete = selectedItem => {
    dispatch(deleteContact(selectedItem))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully delete!', {
          style: {
            border: '1px solid #0d47a1',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#2196f3',
            secondary: '#fff',
          },
        });
      })
      .catch(() => {
        toast.error('Oops, something go wrong!', {
          style: {
            border: '1px solid #F1041B',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#F1041B',
            secondary: '#fff',
          },
        });
      });
  };

  const handlePatch = selectedItem => {
    dispatch(patchContact(selectedItem))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully edit!', {
          style: {
            border: '1px solid #0d47a1',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#2196f3',
            secondary: '#fff',
          },
        });
      })
      .catch(() => {
        toast.error('Oops, something go wrong!', {
          style: {
            border: '1px solid #F1041B',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#F1041B',
            secondary: '#fff',
          },
        });
      });
  };

  function openDeleteModal(item) {
    setSelectedItem(item);
    setDeleteModalIsOpen(true);
  }

  function openPatchModal(item) {
    setSelectedItem(item);
    setPatchModalIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.body.style.overflow = 'scroll';
    setDeleteModalIsOpen(false);
    setPatchModalIsOpen(false);
  }

  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      {load && <Loader />}
      {error && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      <ContactList openDeleteModal={openDeleteModal} openPatchModal={openPatchModal} />
      {selectedItem && (
        <DeleteModal
          isOpen={deleteModalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          selectedItem={selectedItem}
          handleDelete={handleDelete}
        />
      )}
      {selectedItem && (
        <PatchModal
          isOpen={patchModalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          selectedItem={selectedItem}
          handlePatch={handlePatch}
        />
      )}
    </div>
  );
}
