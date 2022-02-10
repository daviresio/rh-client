import React from 'react';

const TextAreaRow = ({label, detail, actionLabel, action, input, required, disabled, rows = 5}) => {

    const requiredLabel = required ? <span className={'required'}>{' *'}</span> : null;
    return (
        <div className={'input-container'}>
            <label className={'input-label'}>{label}{requiredLabel}</label>
            <div className={'input-padding'}>
                <textarea {...input} className={'input text-area'} disabled={disabled} rows={rows}/>
            </div>
            <div className={'input-detail'}>{detail} <span onClick={action} className={'input-detail-action'}>{actionLabel}</span></div>
        </div>
    );
};

export default TextAreaRow;
