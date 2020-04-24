import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brewery: event.target.brewery.value, alcoholContent: event.target.alcoholContent.value, ibu: event.target.ibu.value, price: event.target.price.value, pintQuantity: 124, id: v4()});
  }

  const newKegFormStyles = {
    marginTop: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }

  return (
    <React.Fragment>
      <div style={newKegFormStyles}>
        <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            name='name'
            placeholder='brew name' />
          <input
            type='text'
            name='brewery'
            placeholder='brewery name' />
          <input
            type='number'
            name='alcoholContent'
            placeholder='ABV' />
          <input
            type='number'
            name='ibu'
            placeholder='IBU' />
          <input
            type='number'
            name='price'
            placeholder='price' />
          <button className="new-keg-button" type="submit">ADD KEG</button>
        </form>
      </div>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;