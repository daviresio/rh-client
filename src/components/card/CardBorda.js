import React from 'react';

const CardBorda = props => {
    const color = props.color ? `card-borda-header-${props.color}` : ''
    return (
        <div className={'card-borda'} style={props.style}>
            <div className={`card-borda-header ${color}`}>
                <div><i className={`fas fa-${props.icon}`}/> <span>{props.title}</span></div>
                {(props.config) && <i className={'fas fa-cogs'}/>}
            </div>

            <div className={props.start ? 'card-borda-body card-borda-body-start' : 'card-borda-body'}>
                {props.children}
            </div>
        </div>
    );
};

export default CardBorda;
