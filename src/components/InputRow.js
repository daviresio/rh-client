import React from 'react';

const InputRow = ({input, label, detail, actionLabel, action}) => {
    return (
        <div className={'input-container'}>
            <label className={'input-label'}>{label}</label>
            <input {...input} className={'input'}/>
            <div className={'input-detail'}>{detail} <span onClick={action} className={'input-detail-action'}>{actionLabel}</span></div>
        </div>
    );
};

export default InputRow;