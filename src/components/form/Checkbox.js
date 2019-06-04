import React from 'react';

const Checkbox = ({label}) => {
    return (
        <label className={'checkbox'}>
            <input type="checkbox" name={'check'}/>
            <span className={'label-text'}>{label}</span>
        </label>
    );
};

export default Checkbox;
