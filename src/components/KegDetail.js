import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>{keg.name} | {keg.brewery}</h1>
      <p>{props.alcoholContent} ABV</p>
      <p>${props.price} /pint</p>
      <p>pints in keg: {props.pintsRemaining}</p>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;