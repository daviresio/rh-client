import React from 'react';

const CardIcon = ({icon, title, subtitle, onClick}) => {

    return (
        <div className={'card-icon'} onClick={onClick}>
            {icon}
            <div className={'title'}>{title}</div>
            <div className={'subtitle'}>{subtitle}</div>
        </div>
    );
};

export default CardIcon;
