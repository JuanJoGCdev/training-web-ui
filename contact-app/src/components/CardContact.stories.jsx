import React from 'react';
import { action } from '@storybook/addon-actions';
import CardContact from './CardContactComponent';

// Acciones para los eventos en el Storybook
const handleDelete = action('Delete');
const handleToggleFavorite = action('Toggle Favorite');

export default {
  title: 'Components/CardContact',
  component: CardContact,
};

const Template = (args) => <CardContact {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  imgUrl: 'https://robohash.org/johndoe.png',
  favorite: false,
  onDelete: handleDelete,
  onToggleFavorite: handleToggleFavorite,
  styleFavorite: false,
};

export const Favorite = Template.bind({});
Favorite.args = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  imgUrl: 'https://robohash.org/janedoe.png',
  favorite: true,
  onDelete: handleDelete,
  onToggleFavorite: handleToggleFavorite,
  styleFavorite: true,
};
