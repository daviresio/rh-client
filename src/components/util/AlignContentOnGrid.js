import React from 'react';

const AlignContentOnGrid = ({children, style, margen}) => {
    let styles = {width: '100%', display: 'grid', gridTemplateColumns: '1.5fr 2fr 1.5fr', ...style};
    if (margen) styles = {...styles, marginLeft: '1.5rem'};
    return <div style={styles}>
        <div/>
        {children}
    </div>;
};
export default AlignContentOnGrid;
