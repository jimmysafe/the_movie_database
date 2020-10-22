import React from 'react'
import { IconContext } from "react-icons";

const IconWrapper = ({ children, color, className=""}) => {
    return (
        <IconContext.Provider value={{ color, className }}>
            {children}
        </IconContext.Provider>
    )
}

export default IconWrapper
