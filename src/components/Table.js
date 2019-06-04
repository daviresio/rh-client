import React from 'react';
import Buttom from "./Buttom";

const Table = ({data, header, addAndRemove, add, remove}) => {

    const renderHeader = () => {
        const render = header ? <tr>{header.map(o => <th key={o}>{o}</th>)}</tr> :
            data ? <tr>{Object.keys(data[0]).map(o => <th key={o}>{o}</th>)}</tr> : null
        if (addAndRemove)
            React.cloneElement(render).props.children.unshift(<th key={0}><Buttom icon onClick={add} color={'blue'} label={<i className="fas fa-plus-circle" />}/></th>)
        return render
    }
    const renderBody = () => {
        const render = data ? data.map((x, i) => <tr key={i}>{Object.values(x).map((o, i) => <td key={i}>{o}</td>)}</tr>) : null
        if (addAndRemove)
            React.Children.map(render, (child, i) =>
                React.cloneElement(child).props.children.unshift(<td key={0}><Buttom icon onClick={()=> remove(i)} color={'red'} label={<i className="fas fa-minus-circle" />}/></td>)
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
