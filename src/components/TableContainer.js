import React from 'react';
import Select from "./Select";

const TableContainer = props => {
    return (
        <div className={'table-container'}>
            <div className={'table-container-header'}>
                <div><Select/> <span>resultados por pagina</span></div>
                <input type={'text'} value={''} placeholder={'pesquise'} className={'input input-width-1'}/>
            </div>
            <div className={'table-container-body'}>{props.children}</div>
            <div className={'table=footer'}> </div>
        </div>
    );
};

export default TableContainer;