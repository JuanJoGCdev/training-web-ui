import React from "react";
import style from "./styles/CardContact.module.css";

// CardContact component displaying a contact's information and actions
const CardContact = ({ name, email, imgUrl, favorite, onDelete, onToggleFavorite, styleFavorite }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        {/* Conditional className to apply special styles when the contact is a favorite */}
        <img
          className={`${style.cardImg} ${favorite ? style.cardImgFavorite : ""}`}
          src={imgUrl}
          alt="Avatar Profile"
        />
        <h5 className={style.cardName}>{name}</h5>
        <span className={style.cardEmail}>{email}</span>
        <hr className={style.cardLine} />

        <div className={style.cardButtonContainer}>
          {/* Conditional rendering of buttons based on the favorite status */}
          {favorite ? (
            <div className={style.cardButtonRemove} onClick={onToggleFavorite}>
              {/* Icon and text for removing the contact from favorites */}
              <i className={`fa-solid fa-x ${style.cardButtonIcon}`}></i>
              <span className={style.cardButtonText}>REMOVE</span>
            </div>
          ) : (
            <>
              {/* Button to add the contact to favorites */}
              <div className={style.cardButtonFavorite} onClick={onToggleFavorite}>
                <i className={`fa-solid fa-heart ${style.cardButtonIcon}`}></i>
              </div>
              {/* Button to delete the contact */}
              <div className={style.cardButtonDelete} onClick={onDelete}>
                <i className={`fa-solid fa-trash ${style.cardButtonIcon}`}></i>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardContact;
