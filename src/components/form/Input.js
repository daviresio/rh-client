import React, {useState} from 'react';

const normalizeOnBlur = value => {
    let v = value.toString()

    if(v.match(/\d$/)) v = v + ',00'
    if(v.match(/,$/)) v = v + '00'
    if(v.match(/,\d$/)) v = v + '0'
    return v
}

const Input = React.forwardRef(({label, className, currency, ...props}, ref) => {

    let containerClass = 'input-normal';
    containerClass = className === undefined || className === null ? containerClass + ' input-width-1' : containerClass + className;

    const [r, forceRender] = useState()

    return (
        <div className={containerClass} style={props.style}>
            <label className={'input-label'}>{label}</label>
            <input ref={ref} {...props.input} onChange={e => props.input.onChange(e.target.value)} className={'input'} placeholder={props.placeholder}
            onBlur={e => {
                if(currency) {
                    let v = props.input.value
                    v = normalizeOnBlur(v)
                    props.input.onChange(v)
                    //props.input.value = v
                    forceRender(v)
                }
                props.input.onBlur(e)
            }}/>
        </div>
    );
});

export default Input;
