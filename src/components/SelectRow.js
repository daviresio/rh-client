import React from 'react';
import Select from "../components/Select";

const SelectRow = props => {
    const {label} = props;
    return (
        <div className={'input-container'}>
            <label className={'input-label'}>{label}</label>
            <Select />
        </div>
    );
};

export default SelectRow;