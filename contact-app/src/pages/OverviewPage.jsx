import React from 'react';
import ContactList from '../components/ContactList';
import ContactFavorite from '../components/ContactFavorite';
import styles from './styles/Overview.module.css';

const OverviewPage = ({ loading, error }) => {
  // Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there's an issue with data fetching
  if (error) {
    return <div>Error loading contacts</div>;
  }

  return (
    <>
      <div className={styles.container}>
        {/* Title and divider for the favorites section */}
        <span className={styles.title}>Favorites</span>
        <hr className={styles.divider} />
      </div>
      <section>
        {/* Display the list of favorite contacts */}
        <ContactFavorite />
      </section>

      <div className={styles.container}>
        {/* Title and divider for the contacts section */}
        <span className={styles.title}>Contacts</span>
        <hr className={styles.divider} />
      </div>

      <section>
        {/* Display the list of all contacts */}
        <ContactList />
      </section>
    </>
  );
}

export default OverviewPage;
