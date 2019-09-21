import React, {useEffect, useRef, useState} from 'react';
import Checkbox from "./form/Checkbox";
import Buttom from "./Buttom";
import CenterContent from "./util/CenterContent";

const ButtomSelectOptions = React.forwardRef(({full, icon, style, color, className, label, type = 'button', options, onChange, actionButton}, ref) => {
    const fullSize = full ? 'button-full' : '';
    const minWdth = icon ? 'button-icon' : 'button-min-width';
    const [visible, setVisible] = useState(false);

    const node = useRef();

    const handleClick = e => {
        if (!node.current.contains(e.target)) setVisible(false)
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, []);

    return (
        <div ref={node} className={'button-select-container'}>
            <button ref={ref} onClick={() => setVisible(!visible)} style={style} type={type}
                    className={`button button-${color} ${fullSize} ${minWdth} ${className}`}>{label}</button>
            {visible && <div className={'list-container'}>
                <ul>
                    {options && options.map((v, i) => <li key={i}><Checkbox label={v.nome} value={v.value} onChange={value => onChange(value, v)}/></li>)}
                </ul>
                <CenterContent>
                    <Buttom color={'green'} label={'Adicionar novo lancamento'} onClick={actionButton}/>
                </CenterContent>
            </div>}
        </div>
    );
});

export default ButtomSelectOptions;
