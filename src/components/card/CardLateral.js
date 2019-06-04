import React from 'react';

const CardLateral = ({icon, title, text, secondText}) => {
    return (
        <div className={'card-lateral'}>
            <i className={`fas fa-${icon}`} />
            <div className={'body'}>
            <div className={'title'}>{title}</div>
            <div className={'text'}>{text}</div>
            <div className={'second-text'}>{secondText}</div>
            </div>
            <i className={`fas fa-caret-right icon`} />
        </div>
    );
};

export default CardLateral;
