import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick = {()=> props.whenKegClicked(props.id)}>
        <h3>{props.name} | {props.brewery}</h3>
        <p>{props.alcoholContent} ABV</p>
        <p>${props.price} /pint</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
}

export default Keg;