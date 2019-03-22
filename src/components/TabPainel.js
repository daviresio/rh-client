import React from 'react';
import GestaoColaboradores from "../pages/Colaboradores";

const TabPainel = props => {
    return (
        <div className={'tab-painel'}>
            <div className={'tabs'}>
                {props.children}
            </div>
        </div>
    );
};

export default TabPainel;
