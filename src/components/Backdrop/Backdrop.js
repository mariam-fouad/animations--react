import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Backdrop.css';

const timingObject={
    enter:200,
    exit:800,
}
const backdrop = (props) => {
    //const cssClasses = ["Backdrop", props.isOpen? "Backdrop--open":"Backdrop--close"];
    return <Transition
            in={props.isOpen} 
            timeout={timingObject}
            mountOnEnter
            unmountOnExit>
            {state=>{
                return (
                 <div className='Backdrop'
                 style={{
                    transition: state==='entering'?'opacity .2s ease-out':'opacity .8s ease-out',
                    opacity:(state==='entering'||state==='exiting')?'0':'1',
                  }}>
                  </div>
            )}}
          </Transition>
     
}
 

export default backdrop;