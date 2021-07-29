import React, { Component } from "react";
import { createPortal } from "react-dom";

class ModalForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return createPortal(
      <section className="modalSection">
        <form className="modalSection-form" onSubmit={this.props.submitEvent}>
          <header className="header">
            <h1 className="title">LogIn</h1>
            <button className="btn-close" type="button" onClick={this.props.closeModal}>
              clase
            </button>
          </header>
          <article className="inpContainer">
            <ModalInput lbl="Username:" type="text" />
            <ModalInput lbl="Username:" type="password" />
            <footer className="footer">
            <button type="submit" className="btn-sumbit">Submit</button>
            </footer>
          </article>
        </form>
      </section>,
      document.getElementById('modal')
    );
  }
}
export default ModalForm;


class ModalInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: ''
        }
    }
    changeHandler = (e) =>{
        this.setState({val: e.target.value})
    }
    render(){
        return(
            <>
            <label className="lbl">{this.props.lbl}</label>
            <input className="inp" type={this.props.type} value={this.state.val} onChange={this.changeHandler} />
            </>
        )
    }
}
