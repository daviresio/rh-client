import React from 'react';

const userImg = require('../../assets/user.png');

const ColaboradorComFoto = ({nome, foto, style}) =>
    <div className={'colaborador-com-foto'} style={style}>
        <div className={'image-container'}>
            {foto ? <img src={foto}/> : <img src={userImg}/>}
        </div>
        <span>{nome}</span>
    </div>;

export default ColaboradorComFoto;
