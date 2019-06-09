import React from 'react';

const Edit = ({onClick, className}) => {
    return (
        <div onClick={onClick} className={'edit ' + className}>
            <i className={`fas fa-edit`}/>
            <span>{'Editar'}</span>
        </div>
    );
};

export default Edit;
