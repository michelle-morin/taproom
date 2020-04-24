import React from 'react';
import Keg from 'Keg';
import PropTypes from 'prop-types';

function TapList(props){
  return(
    <React.Fragment>
      {props.tapList.map((keg) =>
      <Keg 
        name={keg.name}
        brewery={keg.brewery}
        alcoholContent={keg.alcoholContent}
        price={keg.price} />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
}

export default TapList;