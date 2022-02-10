import React from 'react';

const Edit = ({onClick, className, style}) => {
    return (
        <div onClick={onClick} style={style} className={'edit ' + className}>
            <i className={`fas fa-edit`}/>
            <span>{'Editar'}</span>
        </div>
    );
};

export default Edit;
