import React from 'react'
import Label from '../common/Label';
import StarRatings from 'react-star-ratings'


const MovieInfo = ({ movie }) => {
    
    const movieInfo = [
        { name: 'Genres', render: () => { return movie.genres.map(genre => <Label red key={genre.name} text={genre.name} />) } },
        { name: 'Release Date', render: () =>  <Label text={movie.release_date} />},
        { name: 'Duration', render: () => <Label text={`'${movie.runtime}`} />},
        { name: 'Budget Spent', render: () => <Label text={`$${movie.budget.toFixed(2)}`} />},
        { name: 'Total Income', render: () =>  <Label text={`$${movie.revenue.toFixed(2)}`} />}
    ]

    return (
        <div>
            {/* TITLE */}
            <h1 className="text-4xl">{movie.title}</h1>

            {/* STARS */}
            <StarRatings
                rating={movie.vote_average / 2}
                starDimension="15px"
                starSpacing="1px"
                starRatedColor="#F4442E"
                starEmptyColor="lightgrey"
                />

            {/* TAGLINE */}
            <h6 className="mt-3 mb-3">{movie.tagline}</h6>

            {/* INFOS */}
            <div className="uppercase font-bold text-xs text-gray-700">
                {movieInfo.map(info => (
                    <div className="my-1 bg-gray-100 px-1 py-2 rounded-md flex flex-wrap items-center justify-center md:justify-start" key={info.name}>
                        <span>{info.name}</span>
                        {info.render()}
                    </div>
                ))}
            </div>

            {/* DESCRIPTION */}
            <p className="mt-3">{movie.overview}</p>
        </div>
    )
}

export default MovieInfo
