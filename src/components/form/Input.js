import React from 'react';

const Input = React.forwardRef(({label, ...props}, ref) => {
    return (
        <div className={'input-normal ' + props.className} style={props.style}>
            <label className={'input-label'}>{label}</label>
            <input ref={ref} {...props} className={'input'}/>
        </div>
    );
})

export default Input;
