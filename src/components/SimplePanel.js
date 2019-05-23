import React from 'react';

const SimplePanel = ({qtd, text, color}) => {
    return (
        <div className={`simple-panel simple-panel-${color}`}>
            <div className={'qtd'}>{qtd}</div>
            <div className={'text'}>{text}</div>
        </div>
    );
};

export default SimplePanel;
