import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Coffee from 'components/Coffee';
import CoffeeDetails from 'components/CoffeeDetails';
import Modal from 'components/Modal';
import usePagination from 'hooks/usePagination';
import useModal from 'hooks/useModal';
import Styles from './style.module.scss';

function CoffeeListings({ coffeeListings }) {
  // Constants
  const ITEMS_PER_PAGE = 5;

  // handlers
  const handlePageClick = (evt) => {
    handlePageChange(evt.selected);
  };

  const findItemById = (selectedId) => {
    const selectedCoffee = coffeeListings.find(
      (item) => Number(item.id) === Number(selectedId)
    );
    return selectedCoffee;
  };

  // Hooks
  const [paginatedListings, handlePageChange] = usePagination(
    coffeeListings,
    ITEMS_PER_PAGE
  );
  const [isVisible, selectedCoffee, showModal, hideModal] =
    useModal(findItemById);

  return (
    <div>
      <Modal visible={isVisible} closeModal={hideModal}>
        <CoffeeDetails coffee={selectedCoffee} />
      </Modal>
      {paginatedListings.map((item) => (
        <Coffee
          key={item.uid}
          id={item.id}
          name={item.blend_name}
          origin={item.origin}
          intensifier={item.intensifier}
          showModal={showModal}
        />
      ))}
      <div className={Styles.pagination}>
        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(coffeeListings.length / ITEMS_PER_PAGE)}
          previousLabel='<'
          renderOnZeroPageCount={null}
          activeClassName={Styles.active}
        />
      </div>
    </div>
  );
}

CoffeeListings.propTypes = {
  coffeeListings: PropTypes.instanceOf(Array).isRequired,
};

export default CoffeeListings;
