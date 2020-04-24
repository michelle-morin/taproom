import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function TapList(props){
  return(
    <React.Fragment>
      {props.tapList.map((keg) =>
      <Keg 
        whenKegClicked = {props.onKegSelection}
        name={keg.name}
        brewery={keg.brewery}
        alcoholContent={keg.alcoholContent}
        price={keg.price}
        pintQuantity={keg.pintQuantity}
        id={keg.id}
        key={keg.id} />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default TapList;