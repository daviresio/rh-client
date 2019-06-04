import React from 'react';

const SimplePanel = ({qtd, text, color, onClick}) => {
    return (
        <div onClick={onClick} className={`simple-panel simple-panel-${color}`}>
            <div className={'qtd'}>{qtd}</div>
            <div className={'text'}>{text}</div>
        </div>
    );
};

export default SimplePanel;
