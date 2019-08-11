import React from 'react';

const Buttom = React.forwardRef(({full, icon, style, onClick, color, className, label, type = 'button'}, ref) => {
    const fullSize = full ? 'button-full' : '';
    const minWdth = icon ? 'button-icon' : 'button-min-width';
    return (
        <button ref={ref} onClick={onClick} style={style} type={type} className={`button button-${color} ${fullSize}  ${minWdth} ${className}`}>{label}</button>
    );
});

export default Buttom;
