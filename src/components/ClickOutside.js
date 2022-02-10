import React, {useEffect, useRef} from 'react';

const ClickOutside = ({children, clickOutside}) => {

    const node = useRef();

    const handleClick = e => {
        if(!node.current.contains(e.target)) clickOutside()
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, []);

    return (
        <div ref={node} style={{width: '100%'}}>
            {children}
        </div>
    );
};

export default ClickOutside;
