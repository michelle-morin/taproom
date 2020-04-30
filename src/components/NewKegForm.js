import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brewery: event.target.brewery.value, alcoholContent: parseInt(event.target.alcoholContent.value), ibu: parseInt(event.target.ibu.value), price: parseInt(event.target.price.value), pintQuantity: 124, id: v4()});
  }

  const newKegFormStyles = {
    marginTop: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }

  return (
    <div style={newKegFormStyles}>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='brew name' required/>
        <input
          type='text'
          name='brewery'
          placeholder='brewery name' required/>
        <input
          type='number'
          name='alcoholContent'
          placeholder='ABV' required/>
        <input
          type='number'
          name='ibu'
          placeholder='IBU' required/>
        <input
          type='number'
          name='price'
          placeholder='price' required/>
        <button className="new-keg-button" type="submit">ADD KEG</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;