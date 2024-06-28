import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import CardContact from './CardContactComponent';
import { calculateTotalPagesFavorites, deleteContact, toggleFavorite } from '../redux/reducers/contactReducer';

const ContactFavorite = ({page}) => {
 
    const contacts = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("Datos globales de contactos:", contacts);
    // }, [contacts]);

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
        dispatch(calculateTotalPagesFavorites())

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
        <div className='flex flex-wrap justify-center space-x-4'>
            {currentContacts.map(contact => (
                contact.favorite && (
                    <CardContact
                        key={contact.id}
                        name={`${contact.first_name} ${contact.last_name}`}
                        email={contact.email}
                        imgUrl={contact.avatar}
                        favorite={contact.favorite}
                        onToggleFavorite={() => handleToggleFavorite(contact.id)}
                        styleFavorite={true}
                    />
                )

            ))}
        </div>
    );
};

export default ContactFavorite