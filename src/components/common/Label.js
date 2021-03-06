import React from 'react'

const Label = ({ red, text }) => {
    return (
        <span className={`ml-2 mb-1 md:mb-0 rounded-full py-1 px-4 text-white ${red ? 'bg-red' : 'bg-purple'}`}>
            {text}
        </span>
    )
}

export default Label
