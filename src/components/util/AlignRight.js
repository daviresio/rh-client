import React from 'react';

const AlignRight = ({children, style}) =>
    <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', ...style}}>{children}</div>;
export default AlignRight;
