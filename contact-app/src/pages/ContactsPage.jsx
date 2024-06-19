import React from "react";
import CardContact from "../components/CardContactComponent";

const ContactsPage = () => {
  const icons = [
    { name: "heart", color: "#c1d72d" },
    { name: "trash", color: "#CF6679" },
  ];
  return (
    <>
      <div className="m-10 mx-14  flex items-center space-x-4">
        <h1 className="text-xl">Contacts List</h1>
        <hr className=" h-0.5   flex-grow border-0 rounded bg-c1d72d" />
      </div>
      <section className="flex flex-wrap justify-start  items-center m-10">
        <CardContact favorite={false} icons={icons} />
        <CardContact favorite={false} icons={icons} />
        <CardContact favorite={false} icons={icons} />
        <CardContact favorite={false} icons={icons} />
        <CardContact favorite={false} icons={icons} />
        <CardContact favorite={false} icons={icons} />
      </section>
    </>
  );
};

export default ContactsPage;
