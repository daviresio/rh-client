import React, {useState} from 'react';

const CardExpanded = ({initOpened = false, title, children, color}) => {

    const [opened, changeVisibility] = useState(initOpened);
    const cor = color ? `card-borda-header-${color}` : '';
    return (
        <div className={'card-borda card-expanded'}>
            <div className={`card-borda-header ${cor}`} onClick={()=> changeVisibility(!opened)}>
                <span>{title}</span>
            </div>
            <div className={opened ? 'opened' : 'closed'}>
                {children}
            </div>
        </div>
    );
};

export default CardExpanded;
