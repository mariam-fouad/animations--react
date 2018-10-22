import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    isModalOpen: false,
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
        <Modal isOpen={this.state.isModalOpen} />
        <Backdrop isOpen={this.state.isModalOpen} />
        <button className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
