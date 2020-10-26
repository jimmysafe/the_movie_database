import React from 'react'
import StarRatings from 'react-star-ratings';


const MovieCard = ( { movie } ) => {
    return (
            <div className="card-container flex flex-col ">
                <div className="flex-1 overflow-hidden rounded-lg cursor-pointer">
                    <img
                        className="w-full transition-all duration-500 min-h-sm md:min-h-lg"
                        src={ movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '/images/movie_placeholder.svg' }
                        alt={ movie.title }
                    />
                </div>

                <div className="font-bold text-center text-gray-300 text-xs uppercase pt-3 pb-2">
                    <span>{movie.title}</span>
                </div>
                <div className="stars flex justify-center pb-2">
                    <StarRatings
                        rating={movie.vote_average / 2}
                        starDimension="15px"
                        starSpacing="1px"
                        starRatedColor="#F4442E"
                        starEmptyColor="lightgrey"
                    />
                </div>
            </div>
    )
}

export default MovieCard
