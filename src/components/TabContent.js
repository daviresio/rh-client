import React from 'react';
import Buttom from "./Buttom";

const TabContent = props => {
    return (
        <div className={'tab-content'}>
            {props.children}
        </div>
    );
};

export default TabContent;
