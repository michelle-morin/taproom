import React from 'react';

function Header(){
  const headerStyles = {
    textAlign: 'center',
    color:  '#f5f5f5',
    backgroundColor: '#111111',
    fontSize: '3rem'
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Michelle's Taproom</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;