import { useEffect, useState } from 'react';

const usePagination = (listings, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedItems, setPaginatedItems] = useState([]);

  const handleChangeCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const startOffset = (currentPage * itemsPerPage) % listings.length;
    const endOffset = startOffset + itemsPerPage;
    const paginationResult = listings.slice(startOffset, endOffset);
    setPaginatedItems(paginationResult);
  }, [currentPage, listings]);

  return [paginatedItems, handleChangeCurrentPage];
};

export default usePagination;
