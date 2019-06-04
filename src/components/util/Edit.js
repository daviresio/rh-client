import React from 'react';

const Edit = ({onClick}) => {
    return (
        <div onClick={onClick} className={'edit'}>
            <i className={`fas fa-edit`}/>
            <span>{'Editar'}</span>
        </div>
    );
};

export default Edit;
