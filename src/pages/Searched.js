import React, { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'
import { getSearch } from '../queries'
import List from '../components/List'
import { useLocation, useHistory } from 'react-router-dom'

const Searched = () => {
    const location = useLocation()
    const history = useHistory()
    const query = location.search.split("?query=")[1]
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState()

    if(!query) history.push('/')

    useEffect(() => {
        (async() => {
            const data = await getSearch(query)
            console.log(data)
            setMovies(data.results)
            setIsLoading(false)
        })()
    }, [query])

    if(isLoading) return <Loader />


    return (
        <div>
            <List movies={movies}/>
        </div>
    )
}

export default Searched
