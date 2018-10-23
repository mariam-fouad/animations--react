import React from 'react';

import './Modal.css';

const modal = (props) => 
{
    const cssClasses = ['Modal', props.isOpen==="entering" ? 'Modal--open':
    props.isOpen==="exiting" ?'Modal--close':null];
    return (
    <div className={cssClasses.join(' ')}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
)
};

export default modal;