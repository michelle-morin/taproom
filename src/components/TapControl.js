import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
      buttonText = "return to tap list";
    } else {
      currentlyVisibleState = <TapList />
      buttonText = "add a keg";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TapControl;