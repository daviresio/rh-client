import React from 'react';
import Edit from "../util/Edit";
import Delete from "../util/Delete";

const CardLateralSimple = ({text, secondText, edit, remove, style}) => {
    return (
        <div className={'card-lateral-simple'} style={style}>
            <div className={'body'}>
                <div className={'text'}>{text}</div>
                <div className={'second-text'}>{secondText}</div>
            </div>
            <div className={'icones'}>
                <Edit style={{marginRight: '2rem'}} />
                <Delete />
            </div>
        </div>
    );
};

export default CardLateralSimple;
