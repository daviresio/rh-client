import React from 'react';
const TabItem = props => {
    const {title, selected, selectTab} = props;
    return (
        <div onClick={selectTab} className={selected ? 'tab-item tab-active' : 'tab-item'}>{title}</div>
    );
};



export default TabItem;
