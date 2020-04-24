import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <React.Fragment>
      <h3>{props.name} | {props.brewery}</h3>
      <p>{props.alcoholContent} ABV</p>
      <p>${props.price} /pint</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number
}

export default Keg;