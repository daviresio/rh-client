import React from 'react';

const EditTable = ({data, header, keys, clicable, smallPadding, onClick}) => {

    const renderHeader = () =>
        header ? <tr>{header.map(o => <th key={o}>{o}</th>)}</tr> :
                data && data.length ? <tr>{Object.keys(data[0]).map(o => <th key={o}>{o}</th>)}</tr> : null


    const extractValue = (obj, path) => {
        try {
            return path.split('.').reduce((value, el) => value[el], obj)
        } catch (e) {
            return ''
        }
    }

    const handleClick = value => {
        if(clicable) onClick(value)
    }

    const renderBody = () => {
        let classesTr = ''
        let classesTd = ''
        if(clicable) classesTr = classesTr + ' clicable'
        if(smallPadding) classesTd = classesTd + ' small-padding'
        const render = data && data.length ? data.map((x, i) => <tr className={classesTr} onClick={()=> handleClick(x)} key={i}>{keys.map((k, j) =>
            k.includes('.') ? <td className={classesTd} key={j}>{extractValue(x, k)}</td>
                : <td className={classesTd} key={j}>{x[k]}</td>
        )}</tr>) : null
        return render
    }

    return (
        <table className={'table table-borda table-scrolable'}>
            <thead className={'table-head'}>
            {renderHeader()}
            </thead>
            <tbody className={'table-body'}>
            {renderBody()}
            </tbody>

        </table>
    );
};

export default EditTable;
