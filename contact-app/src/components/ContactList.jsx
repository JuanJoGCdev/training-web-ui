import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContact from './CardContactComponent';
import { toggleFavorite, deleteContact, calculateTotalPagesFavorites, calculateTotalPages } from '../redux/reducers/contactReducer';
import style from './styles/ContactList.module.css'

const ContactList = ({ page, setPage }) => {
  const contacts = useSelector((state) => state.contact.contacts); // Access contacts from Redux store
  const dispatch = useDispatch();

  // Toggle favorite status of a contact and update total pages for favorites
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
    dispatch(calculateTotalPagesFavorites());
  };

  // Delete a contact and update pagination if necessary
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    dispatch(calculateTotalPages());

    // Check if the current page is empty after deletion
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    const contactsPerPage = 8;
    const startIndex = (page - 1) * contactsPerPage;
    // If the current page has no contacts, move to the previous page
    if (updatedContacts.slice(startIndex, startIndex + contactsPerPage).length === 0 && page > 1) {
      setPage(page - 1);
    }
  };

  const contactsPerPage = 8;
  const startIndex = (page - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;

  // Determine which contacts to display based on pagination
  let currentContacts;

  if (page == null) {
    currentContacts = contacts; // No pagination if page is null
  } else {
    currentContacts = contacts.slice(startIndex, endIndex); // Paginated contacts
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
