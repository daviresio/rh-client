import React, {useState} from 'react';
import ClickOutside from "./ClickOutside";

const Select = ({options = [], value, selecionou, inputLabel}) => {

        const [listOpen, setListVisibility] = useState(false);
        const selectItem = o => {
            setListVisibility(false)
            selecionou(o)
        }
        const itens = options.map(o => <li key={o.id} onClick={() => selectItem(o)} className={'select-list-item'}>{o[inputLabel]}</li>)
        return (
            <ClickOutside clickOutside={() => setListVisibility(false)}>
                <div className={'select-container'}>
                    <div className={'input select-header'} onClick={() => setListVisibility(!listOpen)}>
                        <div className={'select-header-title'}>{value === '' || value == null ? 'Selecione' : value[inputLabel]}</div>
                    </div>
                    {(listOpen) && <ul className={'select-list'}>{itens}</ul>}
                </div>
            </ClickOutside>
        );
}
export default Select;