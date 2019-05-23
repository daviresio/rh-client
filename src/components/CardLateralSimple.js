import React from 'react';

const CardLateralSimple = ({text, secondText, edit, remove}) => {
    return (
        <div className={'card-lateral-simple'}>
            <div className={'body'}>
                <div className={'text'}>{text}</div>
                <div className={'second-text'}>{secondText}</div>
            </div>
            <div className={'icones'}>
                <div className={'icones-edit'}>
                    <i className={`fas fa-edit`}/>
                    {'Editar'}
                </div>
                <div className={'icones-delete'}>
                    <i className="fas fa-times" />
                    {'Excluir'}
                </div>
            </div>
        </div>
    );
};

export default CardLateralSimple;
