import React from 'react';
import Select from "../components/Select";

const SelectRow = ({input, label, detail, actionLabel, action, options, inputLabel = 'nome', valueLabel = 'id'}) => {
    return (
        <div className={'input-container'}>
            <label className={'input-label'}>{label}</label>
            <Select {...input} options={options} selecionou={e => {input.onChange(e)}} inputLabel={inputLabel} valueLabel={valueLabel} />
            <div className={'input-detail'}>{detail} <span onClick={action} className={'input-detail-action'}>{actionLabel}</span></div>
        </div>
    );
};

export default SelectRow;
