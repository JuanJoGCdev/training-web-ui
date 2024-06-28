import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactReducer";



const store = configureStore({
    reducer: {

        contact: contactReducer,

    },
    devTools: process.env.NODE_ENV !== 'production', // Habilitar DevTools en desarrollo

})
export default store;