import React from 'react';

const StepperHorizontalItem = ({number, active, title, status = 'PENDING', onClick}) => {

    let classes = 'stepper-horizontal-item';

    if (status === 'APROVADA') classes = classes + ' stepper-horizontal-item-aproved';
    if (status === 'REPROVADA') classes = classes + ' stepper-horizontal-item-recused';


    return (
        <div className={'stepper-horizontal-item-container ' + (active ? 'stepper-horizontal-item-active' : null)} onClick={onClick}>
            <div className={classes}>
                {number}
            </div>
            <div className={'title'}>{title}</div>
        </div>
    );
};

export default StepperHorizontalItem;
