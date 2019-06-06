import React from 'react';
const TabItem = props => {
    const {title, selected, onClick} = props;
    return (
        <div onClick={onClick} className={selected ? 'tab-item tab-active' : 'tab-item'}>{title}</div>
    );
};



export default TabItem;
