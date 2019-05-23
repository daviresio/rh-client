import React from 'react';

const Message = ({icon = 'exclamation-triangle', text, color}) => {
    return (
        <div className={`message message-${color}`}>
            <i className={`fas fa-${icon}`} />
            <span>{text}</span>
        </div>
    );
};

export default Message;
