import React from 'react';

const TableManual = ({tableHeader, tableBody, borda, clicable, onClick,}) => {


    const handleClick = value => {
        if (clicable) onClick(value)
    };


    return (
        <table className={borda ? 'table table-borda' : 'table'}>
            <thead className={'table-head'}>
            {tableHeader}
            </thead>
            <tbody className={'table-body'}>
            {tableBody}
            </tbody>

        </table>
    );
};

export default TableManual;
