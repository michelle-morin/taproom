import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  const kegStyles = {
    textAlign: 'center',
    border: '2px solid #388087',
    width: '200px',
    height: '200px',
    padding: '2%',
    margin: '1%'
  }

  return(
    <React.Fragment>
      <div style={kegStyles}>
        <div onClick = {()=> props.whenKegClicked(props.id)}>
          <h3 className="beer-name">{props.name}</h3>
          <p>{props.brewery}</p>
          <p>{props.alcoholContent} ABV</p>
          <p>${props.price} /pint</p>
        </div>
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