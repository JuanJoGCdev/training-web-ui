import React from 'react';
import style from './styles/Pagination.module.css'

const Pagination = ({ page,setPage, totalPages}) => {

 

  const handleNextPage = () => {
    if (page < totalPages) {
  setPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
  setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className={style.paginationContainer}>
      <p className={style.paginationText}>
        <strong className={style.paginationNumber}>{page}</strong> de <strong className={style.paginationNumber}>{totalPages}</strong>
      </p>
      <a
        onClick={handlePrevPage}
        className={style.paginationArrows}
        type="button"
      >
        <i className="fa-solid fa-angle-left"></i>
      </a>
      <a
        onClick={handleNextPage}
        className={style.paginationArrows}
        type="button"
      >
        <i className="fa-solid fa-angle-right"></i>
      </a>
    </div>
  );
};

export default Pagination;
