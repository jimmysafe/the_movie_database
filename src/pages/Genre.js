import React, { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'
import { getGenre } from '../queries'
import List from '../components/List'
import { useParams, useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination'


const Genre = () => {
    const params = useParams()
    const location = useLocation()

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState()

    useEffect(() => {
        (async() => {
            const currentPage = location.search.split("?page=")[1]
            const data = await getGenre(params.genre_id, currentPage)
            setMovies(data.results)
            setIsLoading(false)
        })()
    }, [params.genre_id, location.search])

    if(isLoading) return <Loader />


    return (
        <div>
            <Pagination />
            <List movies={movies}/>
            <Pagination />
        </div>
    )
}

export default Genre
