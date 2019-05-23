import React from 'react';

const PageEmpty = props => {
    return (
        <div className={'page'}>
            {props.children}
        </div>
    );
};

export default PageEmpty;
