import React from 'react';
import Header from './Header.js';
import TapControl from './TapControl.js';
import Footer from './Footer.js';

function App() {
  const appStyles = {
    fontFamily: "'Montserrat', sans-serif"
  }

  return (
    <React.Fragment>
      <div style={appStyles}>
        <Header />
        <TapControl />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
