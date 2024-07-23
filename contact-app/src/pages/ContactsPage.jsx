import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import style from './styles/Contacts.module.css'

const ContactsPage = ({ loading, error }) => {
  const totalPages = useSelector(state => state.contact.totalPages);
  const [page, setPage] = useState(1);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los contactos</div>;
  }

  return (
    <>
      <div className={style.contactListContainer}>
        <span className={style.contactListTitle}>Contacts List</span>
        <hr className={style.contactListLine} />
      </div>
      <section className={style.contactList}>
        <ContactList page={page} setPage={setPage} />
      </section>
      <section className={style.contactListPagination}>
        <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
      </section>
    </>
  );
};

export default ContactsPage;