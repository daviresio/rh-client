import React, {useEffect, useRef} from 'react';

const ClickOutside = ({children, clickOutside}) => {

    const node = useRef()

    const handleClick = e => {
        if(!node.current.contains(e.target)) clickOutside()
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div ref={node}>
            {children}
        </div>
    );
};

export default ClickOutside;