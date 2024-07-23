// src/components/ContactList.stories.jsx
import React, { useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import contactReducer from "../redux/reducers/contactReducer"; // Ajusta la ruta según sea necesario
import ContactList from "./ContactList";
import CardContact from "./CardContactComponent";

// Configuración básica del store para Storybook
const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducer, {
  contact: {
    contacts: [
      {
        id: "1",
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        avatar: "https://robohash.org/johndoe.png",
        favorite: true,
      },
      {
        id: "2",
        first_name: "Jane",
        last_name: "Doe",
        email: "jane.doe@example.com",
        avatar: "https://robohash.org/janedoe.png",
        favorite: false,
      },
      // Agrega más contactos de ejemplo si es necesario
    ],
    totalPagesFavorite: 1,
  },
});

export default {
  title: "Components/ContactList",
  component: ContactList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (args) => {
  const [page, setPage] = useState(1);
  return <ContactList {...args} page={page} setPage={setPage} />;
};

export const Default = Template.bind({});
Default.args = {
  // Aquí puedes añadir props predeterminadas si es necesario
};
