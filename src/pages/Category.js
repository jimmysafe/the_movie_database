import React, { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'
import { getCategory } from '../queries'
import List from '../components/List'
import { useLocation } from 'react-router-dom'

const Category = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState()

    const pageType = location.pathname.split("/")[1]

    useEffect(() => {
        (async() => {
            const data = await getCategory(pageType)
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

export default Category
