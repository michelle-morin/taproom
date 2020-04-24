import React from 'react';

function Header(){
  const headerStyles = {
    marginLeft: '10vw',
    marginRight: '10vw',
    position: 'absolute',
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
    backgroundColor: '#f6f6f2',
    color:  'rgb(227, 138, 89)',
    fontSize: '1.5rem'
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <header>
          <h1>REACT TAPROOM</h1>
        </header>
      </div>
    </React.Fragment>
  );
}

export default Header;