import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { getPopular } from '../queries'
import List from '../components/List'

const Popular = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState()

    useEffect(() => {
        (async() => {
            const data = await getPopular()
            setMovies(data.results)
            setIsLoading(false)
        })()
    }, [])

    if(isLoading) return <Loader />

    return (
        <div>
            <List movies={movies}/>
        </div>
    )
}

export default Popular
