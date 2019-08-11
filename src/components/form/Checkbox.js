import React, {useEffect, useState} from 'react';

const Checkbox = ({label, ...props}) => {
    const [v, setV] = useState(props.input ? props.input.value : props.value);

    useEffect(()=> {
        if(props.input && props.input.value !== v) setV(props.input.value)
    }, [props.input]);

    return (
        <label className={'checkbox'}>
            <input type="checkbox" name={'check'} {...props} onChange={() => {
                if (props.input) {
                    props.input.onChange(!v);
                    setV(!v)
                } else {
                    props.onChange(!v);
                    setV(!v)
                }
            }} checked={v}/>
            <span className={'label-text'}>{label}</span>
        </label>
    );
};

export default Checkbox;
