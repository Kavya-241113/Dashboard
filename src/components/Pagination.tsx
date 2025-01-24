import React from 'react';
import ReactPaginate from 'react-paginate';

interface Props {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<Props> = ({ pageCount, onPageChange }) => (
  <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={onPageChange}
    containerClassName={'pagination justify-content-center mt-4'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
  />
);

export default Pagination;
