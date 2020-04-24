import React from 'react';
// import { v4 } from 'uuid';

function NewKegForm() {
  return (
    <React.Fragment>
      <form>
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
          name='price'
          placeholder='price' />
        <button type="submit">ADD KEG</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;