import React from 'react';
import styled from "styled-components";

const StepperHorizontal = ({children}) => {
    const arr = [];
    const max = React.Children.count(children) - 1;
    React.Children.forEach(children, ((v, i) => {
        arr.push(React.cloneElement(v, {key: i}));
        if (i !== max) {
            arr.push(React.cloneElement(<Separador/>, {key: i + 30}))
        }

    }));
    return (
        <div className={'stepper-horizontal'}>
            {arr}
        </div>
    );
};

export default StepperHorizontal;


const Separador = styled.div`
 width: .5rem;
 height: 3rem;
 margin-left: 1.8rem;
 background-color: #BFC1C4;
`;
