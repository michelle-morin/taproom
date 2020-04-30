import React from 'react';

function Header(){
  const headerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderBottom: '3px solid #388087',
    backgroundColor: 'rgb(198,229,214)',
    color:  '#388087',
    fontSize: '2rem',
    fontFamily: "'Oswald', sans-serif"
  }

  return (
    <div style={headerStyles}>
      <h1>REACT ON TAP</h1>
    </div>
  );
}

export default Header;