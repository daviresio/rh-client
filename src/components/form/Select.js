import React, {useState} from 'react';
import ClickOutside from "../ClickOutside";

const Select = ({options = [], inputLabel = 'nome', valueLabel = 'id', input = {}, label, requiredLabel, className, correcaoList}) => {

    const [listOpen, setListVisibility] = useState(false);
    const selectItem = o => {
        setListVisibility(false);
        input.onChange(o[valueLabel]);
        input.value = o[valueLabel]
    };
    const itens = options.map(o => <li key={o[valueLabel]} onClick={() => selectItem(o)}
                                       className={'select-list-item'}>{o[inputLabel]}</li>);
    const getValue = () => {
        const opt = options.filter(v => v[valueLabel] === input.value)[0];
        if (opt) return opt[inputLabel]
    };

    const renderLabel = <label className={'input-label'}>{label}{requiredLabel}label</label> ? label : null;
    let containerClass = 'select-container';
    containerClass = className === undefined || className === null ? containerClass + ' input-width-1' : containerClass + className;
    return (
        <ClickOutside clickOutside={() => setListVisibility(false)}>
            <div className={containerClass}>
                {renderLabel}
                <div className={'input select-header'} onClick={() => setListVisibility(!listOpen)} tabIndex={0}>
                    <div className={'select-header-title'}>{input.value === '' || input.value == null ? <span className={'placeholder'}>Selecione</span> : getValue()}</div>
                    <i className={`fas fa-caret-down ${listOpen ? 'down' : 'up'}`}/>
                </div>
                {(listOpen) && <ul className={correcaoList ? 'select-list correcao-list' : 'select-list'}>{itens}</ul>}
            </div>
        </ClickOutside>
    );
};
export default Select;
