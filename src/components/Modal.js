import React from 'react';

const Modal = ({title, children}) => {
    return (
        <div className={'modal-container'}>
            <div className={'modal'}>
                <div className={'modal-header'}>
                    {title}
                </div>
                <div className={'modal-body'}>
                    {children}
                </div>
                <div className={'modal-footer'}>

                </div>
            </div>
        </div>
    );
};

export default Modal;