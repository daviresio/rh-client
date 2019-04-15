import React from 'react';

const Stepper = props => {
    return (
        <div className={'stepper'}>
            {props.children}
        </div>
    );
};

export default Stepper;