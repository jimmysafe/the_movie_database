import React, { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'
import { getGenre } from '../queries'
import List from '../components/List'
import { useParams } from 'react-router-dom'

const Genre = () => {
    const params = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState()


    useEffect(() => {
        (async() => {
            const data = await getGenre(params.genre_id)
            setMovies(data.results)
            setIsLoading(false)
        })()
    }, [params.genre_id])

    if(isLoading) return <Loader />


    return (
        <div>
            <List movies={movies}/>
        </div>
    )
}

export default Genre
