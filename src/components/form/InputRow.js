import React from 'react';

const InputRow = ({label, detail, actionLabel, action, input, required, disabled, type = 'text'}) => {

    const requiredLabel = required ? <span className={'required'}>{' *'}</span> : null;
    return (
        <div className={'input-container'}>
            <label className={'input-label'}>{label}{requiredLabel}</label>
            <div className={'input-padding'}>
            <input {...input} className={'input'} disabled={disabled} type={type}/>
            </div>
            <div className={'input-detail'}>{detail} <span onClick={action} className={'input-detail-action'}>{actionLabel}</span></div>
        </div>
    );
};

export default InputRow;
