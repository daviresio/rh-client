import React from 'react';

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <div className={'logo'}>{'RH Inteligente'}</div>
            <ul className={'lista'}>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Painel'}</span>
                </li>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Colaboradores'}</span>
                </li>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Ferias'}</span>
                </li>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Beneficios'}</span>
                </li>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Folha de pagamento'}</span>
                </li>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Comunicacao'}</span>
                </li>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Ponto'}</span>
                </li>
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Relatorios'}</span>
                </li>
                <li className={'separador'} />
                <li className={'item'}>
                    <i className={`fas fa-edit`}/>
                    <span>{'Ajuda'}</span>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
