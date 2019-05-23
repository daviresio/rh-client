import React from 'react';

const Table = props => {
    const {data} = props;
    return (
        <table className={'table'}>

            <thead className={'table-head'}>
            <tr>{Object.keys(data[0]).map(o => <th key={o}>{o}</th>)}</tr>
            </thead>
            <tbody className={'table-body'}>
            {data.map((x, i) => <tr key={i}>{Object.values(x).map(o => <td>{o}</td>)}</tr>)}
            </tbody>

        </table>
    );
};

export default Table;