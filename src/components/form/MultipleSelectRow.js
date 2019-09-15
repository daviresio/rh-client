import React, {useState} from 'react';
import ClickOutside from "../ClickOutside";

const MultipleSelectRow = ({options = [], inputLabel = 'nome', valueLabel = 'id', input = {}, label, requiredLabel, className, correcaoList}) => {

    const [listOpen, setListVisibility] = useState(false);
    const [valuesToRender, setValuesToRender] = useState([]);


    const selectItem = o => {
        setListVisibility(false);
        input.onChange([...input.value, o[valueLabel]]);
        input.value = [...input.value, o[valueLabel]];
        setValuesToRender(v => [...v, input.value])
    };

    const removeItem = (v) => {
        const index = input.value.findIndex(x => x === v[valueLabel]);
        let temp = input.value.slice(0);
        temp.splice(index, 1);
        input.onChange(temp);
        setValuesToRender(x => x.filter(y => y !== v[valueLabel]))
    };

    const itens = options === undefined ? [] : options.filter(x => {
        if (input.value === undefined || input.value === null || !Array.isArray(input.value)) return x;
        const i = input.value.findIndex(y => y === x[valueLabel]);
        if (i === -1) return x
    }).map(o => {
        if (o !== undefined) {
            return <li key={o[valueLabel]} onClick={() => selectItem(o)} className={'select-list-item'}>{o[inputLabel]}</li>
        }
    });

    const getValue = () => {
        if (options[0] === undefined) return;

        let arr = [];
        options.forEach(x => {
            return [...input.value].forEach(y => {
                if (x[valueLabel] === y) arr.push(x)
            })
        });

        return arr.map(v => <Bagget key={v[valueLabel]} text={v[inputLabel]} remove={() => removeItem(v)}/>)
    };

    const renderLabel = <label className={'input-label'}>{label}{requiredLabel}label</label> ? label : null;
    let containerClass = 'select-container';
    containerClass = className === undefined || className === null ? containerClass + ' input-width-1' : containerClass + className;

    return (
        <ClickOutside clickOutside={() => setListVisibility(false)}>
            <div className={'input-container'}>
                <label className={'input-label'}>{renderLabel}{requiredLabel}</label>
                <div className={containerClass}>
                    <div className={'input select-header'} tabIndex={0}>
                        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'default'}}
                             onClick={() => setListVisibility(!listOpen)}/>
                        <div className={'multi-select-header-title'}>{input.value === '' || input.value == null ?
                            <span className={'placeholder'}>Selecione</span> : getValue()}</div>
                        <i className={`fas fa-caret-down ${listOpen ? 'down' : 'up'}`}/>
                    </div>
                    {(listOpen) && <ul className={correcaoList ? 'multi-select-list correcao-list' : 'multi-select-list'}>{itens}</ul>}
                </div>
            </div>
        </ClickOutside>
    );
};

export default MultipleSelectRow;

const Bagget = ({text, remove}) =>
    <div className={'multi-select-bagget'}>
        {text}
        <i className="fas fa-times" onClick={remove}/>
    </div>;
