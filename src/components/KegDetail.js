import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg } = props;

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
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;