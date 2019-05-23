import React from 'react';

const Buttom = props => {
    const full = props.full ? 'button-full' : ''
    return (
        <a onClick={props.click} className={`button button-${props.color} ${full}`}>{props.label}</a>
    );
};

export default Buttom;