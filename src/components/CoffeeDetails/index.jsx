import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style.module.scss';

function CoffeeDetails({ coffee }) {
  return (
    <div className={Styles.details}>
      <div>
        <h4>Blend Name:</h4>
        <span>{coffee?.blend_name ?? '--'}</span>
      </div>
      <div>
        <h4>Origin:</h4>
        <span>{coffee?.origin ?? '--'}</span>
      </div>
      <div>
        <h4>Variety:</h4>
        <span>{coffee?.variety ?? '--'}</span>
      </div>
      <div>
        <h4>Origin:</h4>
        <span>{coffee?.origin ?? '--'}</span>
      </div>
      <div>
        <h4>Notes:</h4>
        <span>{coffee?.notes ?? '--'}</span>
      </div>
      <div>
        <h4>Intensifier:</h4>
        <span>{coffee?.intensifier ?? '--'}</span>
      </div>
    </div>
  );
}

CoffeeDetails.propTypes = {
  coffee: PropTypes.instanceOf(Object).isRequired,
};

export default CoffeeDetails;
