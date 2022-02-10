import React, {useEffect, useState} from 'react';
import Buttom from "./Buttom";

const Modal = ({title, children, border, full = true, footer, visible = false, cancel, save, close}) => {


    const [isVisible, setVisible] = useState();

    useEffect(() => {
        setVisible(visible)
    }, []);

    useEffect(() => {
        if (visible !== isVisible) {
            if (visible) {
                setVisible(visible)
            } else {
                setTimeout(() => {
                    setVisible(visible)
                }, 600)
            }
        }
    }, [visible]);


    let classes = 'modal-body';
    if (border) classes = classes + ' modal-body-border';
    if (!full) classes = classes + ' modal-body-middle';
    if (footer && typeof footer === 'boolean') footer =
        <div className={'modal-footer'}>
            <Buttom style={{marginRight: '2rem'}} color={'red'} label={'Cancelar'} onClick={cancel}/>
            <Buttom color={'green'} label={'Salvar'} onClick={save}/>
        </div>;

    const content = isVisible ? <div className={visible ? 'modal-container' : null}>
        <div className={visible ? 'modal modal-visible' : 'modal modal-hidden'}>
            <div className={'modal-header'}>
                <div/>
                {title}
                <div className={"close-modal"} onClick={close}>
                    <i className="fas fa-times"/>
                </div>
            </div>
            <div className={classes}>
                {children}
            </div>
            {footer}
        </div>
    </div> : null;

    return (
        content
    );
};

export default Modal;
