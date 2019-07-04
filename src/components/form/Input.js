import React from 'react';

const Input = React.forwardRef(({label, className, ...props}, ref) => {

    let containerClass = 'input-normal'
    containerClass = className === undefined || className === null ? containerClass + ' input-width-1' : containerClass + className

    return (
        <div className={containerClass} style={props.style}>
            <label className={'input-label'}>{label}</label>
            <input ref={ref} {...props.input} onChange={e => props.input.onChange(e.target.value)} className={'input'} placeholder={props.placeholder}/>
        </div>
    );
})

export default Input;
