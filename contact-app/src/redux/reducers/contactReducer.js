import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  totalPages: 0,
  totalPagesFavorite: 1,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const prevContacts = state.contacts;
      const newContacts = action.payload;
      
      // Filtrar los nuevos contactos para eliminar los duplicados
      const filteredNewContacts = newContacts.filter(newContact => {
        return !prevContacts.some(prevContact => prevContact.id === newContact.id);
      });

      // Actualizar el estado con los contactos filtrados
      state.contacts = [...prevContacts, ...filteredNewContacts];
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const contact = state.contacts.find(c => c.id === id);
      if (contact) {
        contact.favorite = !contact.favorite;
      }
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.contacts = state.contacts.filter(c => c.id !== id);
    
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
      
    },
    calculateTotalPages: (state) => {
      const cant = state.contacts;
      const cantPage = Math.ceil(cant.length / 8); 
      cantPage > 0 ? state.totalPages = cantPage : state.totalPages = 1
    },
    calculateTotalPagesFavorites: (state) => {
      const cantFavorite = state.contacts.filter(fav => fav.favorite === true);
      const cantPageFavorite = Math.ceil(cantFavorite.length / 8); // Calcula el número de páginas de favoritos según los contactos favoritos
      cantPageFavorite > 0 ? state.totalPagesFavorite = cantPageFavorite : state.totalPagesFavorite = 1
    }
  },
});

export const { addContact, toggleFavorite, deleteContact, setTotalPages, calculateTotalPagesFavorites, calculateTotalPages } = contactSlice.actions;

export default contactSlice.reducer;
