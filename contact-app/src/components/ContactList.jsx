import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContact from './CardContactComponent';
import { toggleFavorite, deleteContact, calculateTotalPagesFavorites, calculateTotalPages } from '../redux/reducers/contactReducer';
import style from './styles/ContactList.module.css'

const ContactList = ({ page, setPage }) => {
  const contacts = useSelector((state) => state.contact.contacts);

  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
    dispatch(calculateTotalPagesFavorites());
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    dispatch(calculateTotalPages());

    // Verificar si la página actual no tiene contactos después de eliminar
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    const contactsPerPage = 8;
    const startIndex = (page - 1) * contactsPerPage;
    if (updatedContacts.slice(startIndex, startIndex + contactsPerPage).length === 0 && page > 1) {
      setPage(page - 1);
    }
  };

  const contactsPerPage = 8;
  const startIndex = (page - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;

  let currentContacts;

  if (page == null) {
    currentContacts = contacts;
  } else {
    currentContacts = contacts.slice(startIndex, endIndex);
  }

  return (
    <div className={style.contactListContainer}>
      {currentContacts.map(contact => (
        <CardContact
          key={contact.id} 
          name={`${contact.first_name} ${contact.last_name}`}
          email={contact.email}
          imgUrl={contact.avatar}
          favorite={contact.favorite}
          onDelete={() => handleDelete(contact.id)}
          onToggleFavorite={() => handleToggleFavorite(contact.id)}
          styleFavorite={false}
        />
      ))}
    </div>
  );
};

export default ContactList;