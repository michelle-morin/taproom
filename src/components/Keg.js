import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  function inStock(quantity) {
    return quantity > 10 ? <button className="buy-button" onClick={() => props.whenBuyClicked(props.id)}>BUY</button>
    : quantity <= 10 && quantity > 0 ? <button className="buy-button almost-gone" onClick={() => props.whenBuyClicked(props.id)}>BUY(ALMOST GONE!)</button>
    : <p className="empty-keg">keg is empty!</p>
  };

  const kegStyles = {
    textAlign: 'center',
    border: '2px solid #388087',
    width: '300px',
    height: '300px',
    padding: '1%',
    margin: '1%'
  };

  return(
    <div style={kegStyles} id={props.id}>
      <h2 className="beer-name">{props.name}</h2>
      <p>{props.brewery}</p>
      <p>ABV: {props.alcoholContent}% | IBU: {props.ibu}</p>
      <p>${props.price} per pint</p>
      {inStock(props.pintQuantity)}
      <button className="details-button" onClick = {()=> props.whenKegClicked(props.id)}>DETAILS</button>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  alcoholContent: PropTypes.number,
  ibu: PropTypes.number,
  price: PropTypes.number,
  pintQuantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func
}

export default Keg;