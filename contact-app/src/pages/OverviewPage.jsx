import React from 'react';
import ContactList from '../components/ContactList';
import ContactFavorite from '../components/ContactFavorite';
import styles from './styles/Overview.module.css';

const OverviewPage = ({ loading, error }) => {
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los contactos</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>Favorites</span>
        <hr className={styles.divider} />
      </div>
      <section>
        <ContactFavorite />
      </section>

      <div className={styles.container}>
        <span className={styles.title}>Contacts</span>
        <hr className={styles.divider} />
      </div>

      <section>
        <ContactList />
      </section>
    </>
  );
}

export default OverviewPage;
