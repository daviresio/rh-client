import React from 'react';

const Input = ({label, ...props}) => {
    return (
        <div className={'input-normal'}>
            <label className={'input-label'}>{label}</label>
            <input {...props} className={'input'}/>
        </div>
    );
};

export default Input;
