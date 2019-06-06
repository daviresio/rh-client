import React from 'react';
import Buttom from "./Buttom";

const Table = ({data, header, addAndRemove, add, remove, keys}) => {

    const renderHeader = () => {
        const render = header ? <tr>{header.map(o => <th key={o}>{o}</th>)}</tr> :
            data && data.length ? <tr>{Object.keys(data[0]).map(o => <th key={o}>{o}</th>)}</tr> : null
        if (addAndRemove)
            React.cloneElement(render).props.children.unshift(<th key={0}><Buttom icon onClick={add} color={'blue'} label={<i className="fas fa-plus-circle"/>}/></th>)
        return render
    }

    const extractValue = (obj, path) => {
        try {
            return path.split('.').reduce((value, el) => value[el], obj)
        } catch (e) {
            return ''
        }
    }

    const renderBody = () => {
        const render = data && data.length ? data.map((x, i) => <tr key={i}>{keys.map((k, j) =>
            k.includes('.') ? <td key={j}>{extractValue(x, k)}</td>
                : <td key={j}>{x[k]}</td>
        )}</tr>) : null
        if (addAndRemove)
            React.Children.map(render, (child, i) =>
                React.cloneElement(child).props.children.unshift(<td key={-1}><Buttom icon onClick={() => remove(i)} color={'red'} label={<i className="fas fa-minus-circle"/>}/>
                </td>)
            )
        return render
    }
    return (
        <table className={'table'}>

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
