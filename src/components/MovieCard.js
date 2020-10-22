import React from 'react'
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";


const MovieCard = ( { movie, i } ) => {
    return (
        <div style={{ animationDelay: `0.${i}s` }} className="w-1/2 md:w-1/3 lg:w-1/4 px-2 pb-2 mb-4 " >
            <div className="card-container">
                <div className="overflow-hidden rounded-lg cursor-pointer">
                    <Link to={{ pathname: "/movie/" + movie.id }}
                        >
                        <img
                            className="w-full transition-all duration-500"
                            src={ movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'default' }
                            alt={ movie.title }
                        />
                    </Link>
                </div>

                <div className="font-bold text-center text-gray-600 text-xs uppercase pt-3 pb-2">
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
        </div>
    )
}

export default MovieCard
