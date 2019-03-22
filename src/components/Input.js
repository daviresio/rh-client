import React from 'react';

const Input = props => {
    const {label, value} = props
    return (
        <div className={'input-container'}>
            <label className={'input-label'}>{label}</label>
            <input type={'text'} value={value} className={'input input-width-1'}/>
        </div>
    );
};

export default Input;