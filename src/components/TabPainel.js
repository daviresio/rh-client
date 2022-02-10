import React from 'react';

const TabPainel = props => {
    return (
        <div className={'tab-painel'}>
            <div className={'page-title title-tab'}>{props.title}</div>
            <div className={'tabs'}>
                {props.children}
            </div>
        </div>
    );
};

export default TabPainel;
