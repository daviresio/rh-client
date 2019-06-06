import React from 'react';
import PageEmpty from "../layout/PageEmpty";

const StepperItem = props => {
    const {label, number, selected, onClick} = props;
    return (
            <div onClick={onClick} className={selected ? 'stepper-item stepper-item-active' : 'stepper-item '}>
                <div className={'stepper-item-number'}>{number}</div>
                <div className={'stepper-item-label'}>{label}</div>
            </div>
    );
};

export default StepperItem;
