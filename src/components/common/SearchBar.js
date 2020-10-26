import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
    const history = useHistory()
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        history.replace(`/search?query=${value}&page=1`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                id="search"
                className="text-sm py-1 px-2 rounded-sm"
                required
                type="text"
                placeholder="Search Movie.."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}

export default SearchBar
