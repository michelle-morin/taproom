import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function TapList(props){

  const tapListStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }

  return(
    <div style={tapListStyles}>
      {props.tapList.map((keg) =>
      <Keg 
        whenBuyClicked = {props.onClickingBuy}
        whenKegClicked = {props.onKegSelection}
        name={keg.name}
        brewery={keg.brewery}
        alcoholContent={keg.alcoholContent}
        ibu={keg.ibu}
        price={keg.price}
        pintQuantity={keg.pintQuantity}
        id={keg.id}
        key={keg.id} />
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default TapList;