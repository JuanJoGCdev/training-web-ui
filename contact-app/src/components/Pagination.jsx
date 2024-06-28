import React from 'react';


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
    <div className="flex items-center gap-8 m-2">
      <p className="mr-12 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        <strong className="text-gray-900">{page}</strong> de <strong className="text-gray-900">{totalPages}</strong>
      </p>
      <a
        onClick={handlePrevPage}
        className="relative rounded-lg cursor-pointer"
        type="button"
      >
        <i className="fa-solid fa-angle-left"></i>
      </a>
      <a
        onClick={handleNextPage}
        className="relative rounded-lg cursor-pointer"
        type="button"
      >
        <i className="fa-solid fa-angle-right"></i>
      </a>
    </div>
  );
};

export default Pagination;
