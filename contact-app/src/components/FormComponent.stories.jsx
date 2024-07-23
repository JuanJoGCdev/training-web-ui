// src/components/FormComponent.stories.jsx
import React from 'react';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';
import FormComponent from './FormComponent';
import contactReducer from '../redux/reducers/contactReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default {
  title: 'Components/FormComponent',
  component: FormComponent,
  decorators: [
    (Story) => (
      <ReduxProvider store={store}>
        <Story />
      </ReduxProvider>
    ),
  ],
};

const Template = (args) => <FormComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
