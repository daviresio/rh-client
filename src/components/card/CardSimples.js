import React from 'react';

const CardSimples = props => {
    let classes = props.start ? 'card-simples card-simples-start ' : 'card-simples '
    if(props.className) classes = classes + props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default CardSimples;
