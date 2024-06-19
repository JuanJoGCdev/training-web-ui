import React from "react";
import CardContact from "../components/CardContactComponent";


const FavoritesPage = () => {
  const icons = [

    { name: "x", color: "#CF6679", text: "Remove"},
  ];

  return (
    <>
      <div className="m-10 mx-14  flex items-center space-x-4">
        <h1 className="text-xl">Contacts List</h1>
        <hr className=" h-0.5   flex-grow border-0 rounded bg-c1d72d" />
      </div>
      <section className="flex flex-wrap justify-start  items-center m-10">
        <CardContact favorite={true} icons={icons} />
        <CardContact favorite={true} icons={icons} />
        <CardContact favorite={true} icons={icons} />
        <CardContact favorite={true} icons={icons} />
        <CardContact favorite={true} icons={icons} />
        <CardContact favorite={true} icons={icons} />
      </section>
    </>
  );
};

export default FavoritesPage;
