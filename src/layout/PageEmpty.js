import React from 'react';

const PageEmpty = ({className = '', children}) => {
    const classes = 'page ' + className;
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default PageEmpty;
