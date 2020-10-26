import React, { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'
import { getSearch } from '../queries'
import List from '../components/List'
import { useLocation, useHistory } from 'react-router-dom'
import Pagination from '../components/Pagination'

const Searched = () => {
    const location = useLocation()
    const history = useHistory()
    const query = location.search.split("?query=")[1]
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState()

    if(!query) history.push('/')

    useEffect(() => {
        (async() => {
            const currentPage = location.search.split("&page=")[1]
            const data = await getSearch(query, currentPage)
            setMovies(data.results)
            setIsLoading(false)
        })()
    }, [query, location.search])

    if(isLoading) return <Loader />


    return (
        <div>
            <Pagination searchedMovie />
            <List movies={movies}/>
            <Pagination searchedMovie />
        </div>
    )
}

export default Searched
