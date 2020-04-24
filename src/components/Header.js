import React from 'react';

function Header(){
  const headerStyles = {
    marginLeft: '10vw',
    marginRight: '10vw',
    position: 'fixed',
    top: '5vh',
    left: '0',
    width: '80vw',
    height: '15vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderTop: '3px solid #388087',
    borderBottom: '3px solid #388087',
    color:  'rgb(227, 138, 89)',
    backgroundColor: 'transparent',
    fontSize: '1.5rem'
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>REACT TAPROOM</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;