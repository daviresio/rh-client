import React from 'react';

const TableFolhaPagamento = ({data, header, keys, borda, clicable, smallPadding, onClick, removeReader}) => {

    const renderHeader = () => {
        if (removeReader) return null;
        else {
            const render = header ? <tr>{header.map(o => <th key={o}>{o}</th>)}</tr> :
                data && data.length ? <tr>{Object.keys(data[0]).map(o => <th key={o}>{o}</th>)}</tr> : null;
            return render
        }
    };

    const extractValue = (obj, path) => {
        try {
            return path.split('.').reduce((value, el) => value[el], obj)
        } catch (e) {
            return ''
        }
    };

    const handleClick = value => {
        if (clicable) onClick(value)
    };

    const renderBody = () => {
        let classesTr = '';
        let classesTd = '';
        if (clicable) classesTr = classesTr + ' clicable';
        if (smallPadding) classesTd = classesTd + ' small-padding';
        let styleTd = {};
        let render = data && data.length ? data.map((x, i) => <tr className={classesTr} onClick={() => handleClick(x)} key={i}>{keys.map((k, j) =>
            k.includes('.') ? <td className={classesTd} style={styleTd} key={j}>{extractValue(x, k)}</td>
                : <td className={classesTd} style={styleTd} key={j}>{x[k]}</td>
        )}</tr>).concat(<tr key={-1} className={'table-folha-totais'}>{Object.values(header).map((v,i) => {
                if (i === 0) return <td key={i} className={'table-folha-totais'}/>;
                    return <td key={i} className={'table-folha-totais'}>
                        <span className={'label'}>{`Total ${v}`}</span>
                        <span className={'value'}>{`R$: ${'0,00'}`}</span>
                    </td>
            })}</tr>)
            : null;




        return render
    };

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

export default TableFolhaPagamento;
