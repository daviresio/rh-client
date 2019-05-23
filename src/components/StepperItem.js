import React from 'react';
import PageEmpty from "../pages/PageEmpty";

const StepperItem = props => {
    const {label, number, active, click} = props;
    return (
            <div onClick={click} className={active ? 'stepper-item stepper-item-active' : 'stepper-item '}>
                <div className={'stepper-item-number'}>{number}</div>
                <div className={'stepper-item-label'}>{label}</div>
            </div>
    );
};

export default StepperItem;