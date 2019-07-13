import React from 'react';
import Select from "./Select";

const SelectRow = ({input, label, detail, actionLabel, action, options, inputLabel, valueLabel, required, ...props}) => {
    const requiredLabel = required ? <span className={'required'}>{' *'}</span> : null
    return (
        <div className={'input-container'}>
            <label className={'input-label'}>{label}{requiredLabel}</label>
            <Select input={input} options={options} inputLabel={inputLabel} valueLabel={valueLabel} />
            <div className={'input-detail'}>{detail} <span onClick={action} className={'input-detail-action'}>{actionLabel}</span></div>
        </div>
    );
};

export default SelectRow;
