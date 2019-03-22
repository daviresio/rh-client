import React from 'react';

const TabItem = props => {
    const {title} = props;
    return (
        <div className={'tab-item tab-active'}>{title}</div>
    );
};

export default TabItem;
