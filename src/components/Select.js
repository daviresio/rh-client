import React, {useState} from 'react';
import ClickOutside from "./ClickOutside";

const Select = ({options = [], value, selecionou, inputLabel, valueLabel}) => {

    const [listOpen, setListVisibility] = useState(false);
    const [innerValue, setValue] = useState(value)
    const selectItem = o => {
        setListVisibility(false)
        setValue(o[valueLabel])
        selecionou(o[valueLabel])
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
                    <div
                        className={'select-header-title'}>{innerValue === '' || innerValue == null ? 'Selecione' : getValue()}</div>
                </div>
                {(listOpen) && <ul className={'select-list'}>{itens}</ul>}
            </div>
        </ClickOutside>
    );
}
export default Select;
