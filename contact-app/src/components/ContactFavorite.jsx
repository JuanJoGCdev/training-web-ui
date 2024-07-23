import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContact from './CardContactComponent';
import { calculateTotalPagesFavorites, toggleFavorite } from '../redux/reducers/contactReducer';
import style from './styles/ContactFavorite.module.css';

const ContactFavorite = ({ page = 1, setPage }) => {
  const contacts = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();

  // Handles toggling the favorite status of a contact
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
    dispatch(calculateTotalPagesFavorites());

    if (setPage) {
      // Update the page number if the current page becomes empty after toggling favorite
      const updatedContacts = contacts.filter(contact => contact.id !== id && contact.favorite);
      const contactsPerPage = 8;
      const startIndex = (page - 1) * contactsPerPage;
      // Check if the current page has no favorite contacts after update
      if (updatedContacts.slice(startIndex, startIndex + contactsPerPage).length === 0 && page > 1) {
        setPage(page - 1);
      }
    }
  };

  const contactsPerPage = 8;
  // Filter contacts to include only favorites
  const favoriteContacts = contacts.filter(contact => contact.favorite);
  const startIndex = (page - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;
  // Slice the list of favorite contacts for pagination
  const currentContacts = setPage ? favoriteContacts.slice(startIndex, endIndex) : favoriteContacts;

  return (
    <div className={style.contactFavoriteContainer}>
      {currentContacts.map(contact => (
        <CardContact
          key={contact.id}
          name={`${contact.first_name} ${contact.last_name}`}
          email={contact.email}
          imgUrl={contact.avatar}
          favorite={contact.favorite}
          onToggleFavorite={() => handleToggleFavorite(contact.id)}
          styleFavorite={true}
        />
      ))}
    </div>
  );
};

export default ContactFavorite;
