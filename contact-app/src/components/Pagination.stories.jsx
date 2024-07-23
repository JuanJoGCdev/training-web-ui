import React, { useState } from 'react';
import Pagination from './Pagination';

// Mock function for setPage
const mockSetPage = (newPage) => {
  console.log('Page set to:', newPage);
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template = (args) => {
  const [page, setPage] = useState(args.page);
  
  return <Pagination {...args} page={page} setPage={setPage} />;
};

export const Default = Template.bind({});
Default.args = {
  page: 1,
  totalPages: 5,
  setPage: mockSetPage,
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  page: 3,
  totalPages: 5,
  setPage: mockSetPage,
};

export const LastPage = Template.bind({});
LastPage.args = {
  page: 5,
  totalPages: 5,
  setPage: mockSetPage,
};
