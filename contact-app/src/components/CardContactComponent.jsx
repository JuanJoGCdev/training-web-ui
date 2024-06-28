import React from "react";


const CardContact = ({ name, email, imgUrl, favorite, onDelete, onToggleFavorite, styleFavorite }) => {
  return (
    <div className="w-64 h-72 max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex flex-col items-center pb-10">
        <img
          className={`mt-4 w-28 h-28 mb-3 rounded-full shadow-lg ${styleFavorite ? "border-4 border-c1d72d" : ""
            }`}
          src={imgUrl}
          alt="Avatar Profile"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
        <span className="text-sm text-gray-500">{email}</span>
        <hr className="bg-gray h-0.5 w-3/4 mt-5" />

        <div className="flex space-x-4 justify-center mt-4">
          {favorite ? (
            <div className="cursor-pointer text-red-600 border-red-600 border  hover:bg-red-600 hover:text-white rounded-lg" onClick={onToggleFavorite}>
              <i className="fa-solid fa-x  m-2"></i>
              <span className="mx-2 " >REMOVE</span>
              
            </div>
          ) : (
            <>
              <div className="cursor-pointer border border-c1d72d  text-c1d72d rounded-lg hover:bg-c1d72d hover:text-white" onClick={onToggleFavorite}>
                <i className="fa-solid fa-heart m-2"></i>
              </div>
              <div className="cursor-pointer border border-red-600  text-red-600 rounded-lg hover:bg-red-600 hover:text-white" onClick={onDelete}>
                <i className="fa-solid fa-trash  m-2 "></i>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default CardContact;