import React, {useEffect, useRef, useState} from 'react';

const ConfigOptions = ({options}) => {

    const [visible, setVisible] = useState(false)

    const no = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)

        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    const handleClick = e => {
        if (!no.current.contains(e.target)) {
            e.stopPropagation()
            e.preventDefault()
            setVisible(false)
        }
    }

    const changeVisibility = e => {
        e.preventDefault()
        e.stopPropagation()
        setVisible(!visible)
    }

    return (
        <div className={'config-options'} ref={no}>
            <i className="fas fa-cogs" onClick={changeVisibility}/>
            {(visible && options.length) &&
            <ul>
                {options.map(v => <li key={v.nome} onClick={v.onClick}>{v.nome}</li>)}
            </ul>}
        </div>
    );
};

export default ConfigOptions;
