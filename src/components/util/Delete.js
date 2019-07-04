import React from 'react';

const Delete = ({onClick}) => {
    return (
        <div onClick={onClick} className={'remove'}>
            <i className={`fas fa-times`}/>
            <span className={'excluir-label'}>{'Excluir'}</span>
        </div>
    );
};

export default Delete;
