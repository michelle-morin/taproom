import React from 'react';

function Header(){
  const headerStyles = {
    textAlign: 'center',
    color:  '#f5f5f5',
    backgroundColor: '#111111',
    fontSize: '2rem',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '20vh',
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <div className="header">
          <h1>Michelle's Taproom</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;