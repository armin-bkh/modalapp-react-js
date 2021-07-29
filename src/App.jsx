import logo from "./logo.svg";
import "./App.scss";
import React, {Component} from 'react';
import ModalForm from "./ModalForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
  }
  sumbitHander = (e) =>{
    e.preventDefault();
  }
  openHandler = () =>{
    this.setState((prevState)=>{
      return {
        toggle: !prevState.toggle
      }
    })
  }
  closeHandler = () =>{
    this.setState({toggle: false})
  }
  render() {
    let modal;
    if(this.state.toggle){
      modal = <ModalForm submitEvent={this.sumbitHander} closeModal={this.closeHandler} />
    }
    return (
      <>
        {modal}
        <button onClick={this.openHandler} className="btn-open">Modal</button>
      </>
    );
  }
}

export default App;
