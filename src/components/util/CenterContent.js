import React from 'react';

const CenterContent = ({children, style}) =>
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', ...style}}>{children}</div>;
export default CenterContent;
