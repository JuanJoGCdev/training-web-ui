import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';


const ContactsPage = ({ loading, error }) => {
  const totalPages = useSelector(state => state.contact.totalPages)
  const [page, setPage] = useState(1);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los contactos</div>;
  }

  return (
    <>
      <div className="m-10 mx-14 flex items-center space-x-4">
        <h1 className="text-xl">Contacts List</h1>
        <hr className="h-0.5 flex-grow border-0 rounded bg-c1d72d" />
      </div>
      <section className="flex flex-wrap justify-start items-center m-10">
        <ContactList page={page} />
      </section>
      <section className='flex items-center justify-end'>
        <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
      </section>
    </>
  );
};

export default ContactsPage;
