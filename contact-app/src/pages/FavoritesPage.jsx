import React, { useState } from "react";
import ContactFavorite from "../components/ContactFavorite";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import style from './styles/Favorites.module.css';

const FavoritesPage = () => {
  const totalPagesFavorite = useSelector(state => state.contact.totalPagesFavorite);
  const [page, setPage] = useState(1);

  return (
    <>
      <div className={style.contactFavoriteContainer}>
        <span className={style.contactFavoriteTitle}>Favorites</span>
        <hr className={style.contactFavoriteLine} />
      </div>
      <section className={style.contactFavorite}>
        <ContactFavorite page={page} setPage={setPage} />
      </section>
      <section className={style.contactFavoritePagination}>
        <Pagination page={page} setPage={setPage} totalPages={totalPagesFavorite} />
      </section>
    </>
  );
};

export default FavoritesPage;
