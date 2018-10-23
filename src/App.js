import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

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
        <Transition 
        in={this.state.isBlockShowen} 
        timeout={1000}
        mountOnEnter
        unmountOnExit>
          {state=>(
            <div style={{
              backgroundColor:'red',
              margin:'auto',
              width:100,
              height:100,
              transition: 'opacity 1s ease-out',
              opacity:(state==='entering'||state==='exiting')?'0':'1',
            }}>
            </div>
          )}
        </Transition>
        <br/>
        <Transition
        in={this.state.isBlockShowen} 
        timeout={900}
        mountOnEnter
        unmountOnExit>
          {(state)=>(
            <Modal isOpen={state} closed={this.closeModal}/>
          )}
         </Transition>
        {this.state.isModalOpen? <Backdrop isOpen /> : null}
        <button className="Button" onClick={this.openModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
