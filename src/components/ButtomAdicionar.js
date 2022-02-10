import React from 'react';

const ButtomAdicionar = ({label, onClick}) => {
    return (
            <div className={'button-adicionar'} onClick={onClick}>
                <span>{label}</span>
                <i className="fas fa-plus-circle" />
            </div>
    );
};

export default ButtomAdicionar;
