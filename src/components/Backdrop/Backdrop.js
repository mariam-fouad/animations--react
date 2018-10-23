import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Backdrop.css';

const backdrop = (props) => {
    //const cssClasses = ["Backdrop", props.isOpen? "Backdrop--open":"Backdrop--close"];
    return <Transition
            in={props.isOpen} 
            timeout={500}
            mountOnEnter
            unmountOnExit>
            {state=>{
                return (
                 <div className='Backdrop'
                 style={{
                    transition: 'opacity .5s ease-out',
                    opacity:(state==='entering'||state==='exiting')?'0':'1',
                  }}>
                  </div>
            )}}
          </Transition>
     
}
 

export default backdrop;