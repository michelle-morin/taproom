import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingBuy } = props;

  function pintsAvailable(quantity) {
    return quantity > 0 ? <button className="buy-button" onClick={()=> onClickingBuy(keg.id)} type="submit">Buy Pint</button> : <p>out of stock!</p>
  }

  const kegDetailStyles = {
    marginTop: '2%',
    textAlign: 'center'
  }

  return (
    <React.Fragment>
      <div style={kegDetailStyles}>
        <h1>{keg.name} | {keg.brewery}</h1>
        <p>{keg.alcoholContent} ABV</p>
        <p>${keg.price} /pint</p>
        <p>pints in keg: {keg.pintQuantity}</p>
        {pintsAvailable(keg.pintQuantity)}
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func
}

export default KegDetail;