import React from 'react'
import List from '../List'

const SimilarMovies = ({ similarMovies }) => {
    return (
        <div className="mt-12">
            <h3 className="text-center font-bold uppercase mb-2">Similar Movies</h3>
            <div className="w-full">
                <List movies={similarMovies}/>
            </div>
        </div>
    )
}

export default SimilarMovies
