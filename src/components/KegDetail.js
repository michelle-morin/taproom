import React from "react";
import BeerImage from './BeerImage';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  const kegDetailStyles = {
    marginTop: '2%',
    textAlign: 'center'
  }

  function isDeletable(quantity) {
    if (quantity <= 0) {
      return <button className="delete-button" onClick={()=> onClickingDelete(keg.id)}>DELETE KEG</button>
    }
  };

  return (
    <React.Fragment>
      <div style={kegDetailStyles}>
        <h1>{keg.name} | {keg.brewery}</h1>
        <p>{keg.alcoholContent} ABV</p>
        <p>${keg.price} /pint</p>
        <p>pints in keg: {keg.pintQuantity}</p>
        {isDeletable(keg.pintQuantity)}
        <BeerImage />
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;