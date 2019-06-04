import React, {useState} from 'react';
import Select from "./form/Select";
import {paginationOptions} from "../util/staticValues";

const TableContainer = props => {
    const [pageOptions, changePageOption] = useState(paginationOptions[0])
    return (
        <div className={'table-container'}>
            <div className={'table-container-header'}>
                <div><Select options={paginationOptions} value={pageOptions} selecionou={v => {changePageOption(v)}} inputLabel={'label'}/> <span>resultados por pagina</span></div>
                <input type={'text'} value={''} placeholder={'pesquise'} className={'input input-width-1'}/>
            </div>
            <div className={'table-container-body'}>{props.children}</div>
            <div className={'table=footer'}> </div>
        </div>
    );
};

export default TableContainer;
