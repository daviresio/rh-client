import React from 'react';

const Buttom = props => {
    return (
        <a className={`button button-${props.color}`}>{props.label}</a>
    );
};

export default Buttom;