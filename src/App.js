import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    isModalOpen: false,
    isBlockShowen:false,
  }

  openModal = ()=>{
    this.setState({isModalOpen: true});
  }

  closeModal = ()=>{
    this.setState({isModalOpen: false});
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button 
        className="Button" 
        onClick={()=>{this.setState(prevState=>({isBlockShowen: !prevState.isBlockShowen}))}}>
          Toggle
        </button>
        {this.state.isBlockShowen? 
        <div style={{
          backgroundColor:'red',
          margin:'auto',
          width:100,
          height:100,
          opacity:1,
        }}></div>
        :null}
        <br/>
        {this.state.isModalOpen? <Modal isOpen={this.state.isModalOpen} closed={this.closeModal}/> : null}
        {this.state.isModalOpen? <Backdrop isOpen={this.state.isModalOpen} /> : null}
        <button className="Button" onClick={this.openModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
