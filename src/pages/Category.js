import React, { useState, useEffect } from 'react'
import Loader from '../components/common/Loader'
import { getCategory } from '../queries'
import List from '../components/List'
import { useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination'

const Category = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState()

    const pageType = location.pathname.split("/")[1]

    useEffect(() => {
        (async() => {
            const currentPage = location.search.split("?page=")[1]
            const data = await getCategory(pageType, currentPage)
            setMovies(data.results)
            setIsLoading(false)
        })()
    }, [pageType, location.search])

    if(isLoading) return <Loader />


    return (
        <div>
            <Pagination />
            <List movies={movies}/>
            <Pagination />
        </div>
    )
}

export default Category
