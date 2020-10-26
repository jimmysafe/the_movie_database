import React from 'react'
import ReactPaginate from 'react-paginate';
import { useHistory, useLocation } from 'react-router-dom'

const Pagination = ({ searchedMovie }) => {
    const history = useHistory()
    const location = useLocation()

    const handlePageChange = (n) => {
        const newPageNumber = n.selected + 1
        if(searchedMovie){
            const queriedMovieParams = location.search.split("&page=")[0]
            history.replace({ search:`${queriedMovieParams}&page=${newPageNumber}`})
        } else {
            history.replace({ search:`?page=${newPageNumber}`})
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div className="page-nav p-8 bg-lightgrey">
            <ReactPaginate
                containerClassName={"flex justify-between items-center"}
                pageClassName="hidden"
                breakClassName="hidden"
                previousLabel={'Previous'}
                previousClassName="mx-1 p-2 rounded-md bg-red text-white text-xs uppercase flex justify-center items-center cursor-pointer"
                nextClassName="mx-1 p-2 rounded-md bg-red text-white text-xs uppercase flex justify-center items-center cursor-pointer"
                nextLabel={'Next'}
                pageCount={20}
                marginPagesDisplayed={0}
                pageRangeDisplayed={3}
                activeClassName="border-2 border-gray-100 "
                onPageChange={n => handlePageChange(n) }
            />
        </div>
    )
}

export default Pagination
