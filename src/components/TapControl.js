import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';
import KegDetail from './KegDetail';

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
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleKegPurchase = (id) => {
    const currentlySelectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newPintQuantity = currentlySelectedKeg.pintQuantity - 1;
    const updatedKeg = {...currentlySelectedKeg, pintQuantity: newPintQuantity};
    const previousKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...previousKegList, updatedKeg],
      selectedKeg: updatedKeg
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg={this.state.selectedKeg}
        onClickingBuy={this.handleKegPurchase} />
      buttonText = "return to tap list";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "return to tap list";
    } else {
      currentlyVisibleState = <TapList 
        tapList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg} />
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