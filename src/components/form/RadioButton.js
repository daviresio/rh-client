import React from 'react';

const RadioButton = ({label, input}) => {
    return (
        <label className={'radio'}>
            <input type="radio" {...input}/>
            <span className={'circle'} />
            <span className={'label'}>{label}</span>
        </label>
    );
};

export default RadioButton;
