import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  contacts: [],
  totalPages: 0,
  totalPagesFavorite: 1,
};

// Slice
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContacts = Array.isArray(action.payload) ? action.payload : [action.payload];
      newContacts.forEach(newContact => {
        const exists = state.contacts.some(contact => contact.id === newContact.id);
        if (!exists) {
          state.contacts.push(newContact);
        }
      });
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
      const cant = state.contacts.length;
      const cantPage = Math.ceil(cant / 8);
      state.totalPages = cantPage > 0 ? cantPage : 1;
    },
    calculateTotalPagesFavorites: (state) => {
      const cantFavorite = state.contacts.filter(fav => fav.favorite).length;
      const cantPageFavorite = Math.ceil(cantFavorite / 8);
      state.totalPagesFavorite = cantPageFavorite > 0 ? cantPageFavorite : 1;
    }
  },
});

export const {
  addContact,
  toggleFavorite,
  deleteContact,
  setTotalPages,
  calculateTotalPagesFavorites,
  calculateTotalPages
} = contactSlice.actions;

export default contactSlice.reducer;
