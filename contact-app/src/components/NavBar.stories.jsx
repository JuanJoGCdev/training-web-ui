// src/components/NavBar.stories.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBarComponent';

// Exporta la configuración de la historia
export default {
  title: 'Components/NavBar',
  component: NavBar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Define una plantilla para el componente
const Template = (args) => <NavBar {...args} />;

// Define diferentes variaciones del componente
export const Default = Template.bind({});
Default.args = {
  toggleForm: () => {},
  formOpen: false,
};

export const FormOpen = Template.bind({});
FormOpen.args = {
  toggleForm: () => {},
  formOpen: true,
};
