import React from 'react';

const TextArea = ({label, detail, actionLabel, action, input, required, disabled, rows = 5, ...props}) => {


    const requiredLabel = required ? <span className={'required'}>{' *'}</span> : null;
    let containerClass = 'input-normal';

    return (
        <div className={containerClass} style={props.style}>
            <label className={'input-label'}>{label}{requiredLabel}</label>
            <textarea {...input} className={'input text-area'} disabled={disabled} rows={rows}/>
            <div className={'input-detail'}>{detail} <span onClick={action} className={'input-detail-action'}>{actionLabel}</span></div>
        </div>
    );
};

export default TextArea;
