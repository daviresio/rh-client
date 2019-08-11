import React from 'react';
import Buttom from "./Buttom";

const Modal = ({title, children, border, full = true, footer, visible = false, cancel, save}) => {
    let classes = 'modal-body';
    if (border) classes = classes + ' modal-body-border';
    if (!full) classes = classes + ' modal-body-middle';
    if(footer && typeof footer === 'boolean') footer =
        <div className={'modal-footer'}>
        <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={cancel}/>
        <Buttom color={'green'} label={'Salvar'} onClick={save}/>
        </div>;
    return (
        <div className={visible ? 'modal-container' : null}>
            <div className={visible ? 'modal modal-visible' : 'modal modal-hidden'}>
                <div className={'modal-header'}>
                    {title}
                </div>
                <div className={classes}>
                    {children}
                </div>
                    {footer}
            </div>
        </div>
    );
};

export default Modal;
