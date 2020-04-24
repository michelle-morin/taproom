import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';

const tapControlStyles = {
  position: 'relative',
  top: '20vh',
  margin: '5%'
}

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "return to tap list";
    } else {
      currentlyVisibleState = <TapList 
        tapList={this.state.masterKegList} />
      buttonText = "add a keg";
    }

    return(
      <React.Fragment>
        <div style={tapControlStyles}>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default TapControl;