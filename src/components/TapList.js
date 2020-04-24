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
    <React.Fragment>
      <div style={tapListStyles}>
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
      </div>
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default TapList;