import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style.module.scss';

function Coffee({ id, name, origin, intensifier, showModal }) {
  const handleShowDetails = () => {
    showModal(id);
  };

  return (
    <div className={Styles.coffeCard}>
      <div>
        <h3>{name}</h3>
        <span className={Styles.mt}>{origin}</span>
      </div>
      <div>
        <span>{intensifier}</span>
        <span className={Styles.mt} onClick={handleShowDetails}>
          View Details
        </span>
      </div>
    </div>
  );
}

Coffee.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  intensifier: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Coffee;
