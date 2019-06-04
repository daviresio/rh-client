import React, {useRef, useState} from 'react';
import ClickOutside from "../ClickOutside";

const Select = ({options = [], value, inputLabel, valueLabel, input}) => {

    const [listOpen, setListVisibility] = useState(false);
    const [innerValue, setValue] = useState(value)
    const selectItem = o => {
        setListVisibility(false)
        setValue(o[valueLabel])
        input.onChange(innerValue)
        input.value = innerValue
    }
    const itens = options.map(o => <li key={o[valueLabel]} onClick={() => selectItem(o)}
                                       className={'select-list-item'}>{o[inputLabel]}</li>)
    const getValue = () => {
       const opt = options.filter(v => v[valueLabel] === innerValue)[0]
        if(opt) return opt[inputLabel]
    }

    return (
        <ClickOutside clickOutside={() => setListVisibility(false)}>
            <div className={'select-container'}>
                <div className={'input select-header'} onClick={() => setListVisibility(!listOpen)}>
                    <div className={'select-header-title'}>{innerValue === '' || innerValue == null ? <span className={'placeholder'}>Selecione</span> : getValue()}</div>
                    <i className={`fas fa-caret-down ${listOpen ? 'down' : 'up'}`} />
                </div>
                {(listOpen) && <ul className={'select-list'}>{itens}</ul>}
            </div>
        </ClickOutside>
    );
}
export default Select;
