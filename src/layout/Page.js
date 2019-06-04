import React from 'react';

const Page = props => {
    return (
        <div className={'page'}>
            <span className={'page-title'}>{props.title}</span>
            {props.children}
        </div>
    );
};

export default Page;
