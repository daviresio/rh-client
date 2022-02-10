import React from 'react';

const TabContent = props => {
    return (
        <div className={'tab-content'}>
            {props.children}
        </div>
    );
};

export default TabContent;
