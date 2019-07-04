import React from 'react';
import Buttom from "../Buttom";
import Checkbox from "../form/Checkbox";

const Table = ({data, header, addAndRemove, add, remove, keys, borda, clicable, smallPadding, onClick, removeReader, addAndRemoveEnd, selectMultiple, checkboxChange}) => {

    const renderHeader = () => {
        if (removeReader) return null
        else {
            const render = header ? <tr>{header.map(o => <th key={o}>{o}</th>)}</tr> :
                data && data.length ? <tr>{Object.keys(data[0]).map(o => <th key={o}>{o}</th>)}</tr> : null
            if (addAndRemove)
                React.cloneElement(render).props.children.unshift(<th key={0}><Buttom icon onClick={add} color={'blue'} label={<i className="fas fa-plus-circle"/>}/></th>)
            return render
        }
    }

    const extractValue = (obj, path) => {
        try {
            return path.split('.').reduce((value, el) => value[el], obj)
        } catch (e) {
            return ''
        }
    }

    const handleClick = value => {
        if (clicable) onClick(value)
    }

    const renderBody = () => {
        let classesTr = ''
        let classesTd = ''
        if (clicable) classesTr = classesTr + ' clicable'
        if (smallPadding) classesTd = classesTd + ' small-padding'
        let styleTd = {}
        let render = data && data.length ? data.map((x, i) => <tr className={classesTr} onClick={() => handleClick(x)} key={i}>{keys.map((k, j) =>
            k.includes('.') ? <td className={classesTd} style={styleTd} key={j}>{extractValue(x, k)}</td>
                : <td className={classesTd} style={styleTd} key={j}>{x[k]}</td>
        )}</tr>) : null
        if (addAndRemove)
            React.Children.map(render, (child, i) =>
                React.cloneElement(child).props.children.unshift(<td key={-1}><Buttom icon onClick={() => remove(i)} color={'red'} label={<i className="fas fa-minus-circle"/>}/>
                </td>)
            )

        if (addAndRemoveEnd)
            React.Children.map(render, (child, i) =>
                React.cloneElement(child).props.children.push(<td style={{width: '23rem'}} key={-1}>
                    <><Buttom color={'green'} label={'Selecionar'} style={{marginRight: '1rem'}} onClick={() => add(i)}/>
                        <Buttom color={'red'} label={'Remover'} onClick={() => remove(i)}/></>
                </td>)
            )

        if (selectMultiple)
            React.Children.map(render, (child, i) =>
                React.cloneElement(child).props.children.unshift(<td key={-1}>
                   <Checkbox onChange={v => checkboxChange(v, i)} />
                </td>)
            )

        return render
    }

    return (
        <table className={borda ? 'table table-borda' : 'table'}>

            <thead className={'table-head'}>
            {renderHeader()}
            </thead>
            <tbody className={'table-body'}>
            {renderBody()}
            </tbody>

        </table>
    );
};

export default Table;
