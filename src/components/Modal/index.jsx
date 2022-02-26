import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style.module.scss';

function Modal({ visible, closeModal, children }) {
  const handleCloseModal = () => {
    closeModal();
  };

  if (visible) {
    return (
      <div className={Styles.modal}>
        <div className={Styles.modalBody}>
          <div className={Styles.modalTitle}>
            <h3>Coffee Details</h3>
            <span onClick={handleCloseModal}>╳</span>
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
