import React from 'react';

const CardSimples = props => {
    return (
        <div className={'card-simples'}>
            {props.children}
        </div>
    );
};

export default CardSimples;