import React, { useState } from "react";
import ContactFavorite from "../components/ContactFavorite";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const totalPagesFavorite = useSelector(state => state.contact.totalPagesFavorite)

  const [page, setPage] = useState(1);

  return (
    <>
      <div className="m-10 mx-14  flex items-center space-x-4">
        <h1 className="text-xl">Contacts List</h1>
        <hr className=" h-0.5   flex-grow border-0 rounded bg-c1d72d" />
      </div>
      <section className="flex flex-wrap justify-start  items-center m-10">
      <ContactFavorite page={page}/>
      </section>
      <section className='flex items-center justify-end'>
        <Pagination page={page} setPage={setPage} totalPages={totalPagesFavorite}/>
      </section>
    </>
  );
};

export default FavoritesPage;
