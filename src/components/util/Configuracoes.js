import React from 'react';

const Configuracoes = ({onClick}) => {
    return (
        <div onClick={onClick} className={'configuracoes'}>
            <i className={`fas fa-cogs`}/>
            <span>{'Configuracoes'}</span>
        </div>
    );
};

export default Configuracoes;
