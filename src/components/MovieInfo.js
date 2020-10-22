import React from 'react'
import Label from '../components/Label';


const MovieInfo = ({ movie }) => {
    
    const movieInfo = [
        { name: 'Genres', render: () => { return movie.genres.map(genre => <Label red key={genre.name} text={genre.name} />) } },
        { name: 'Release Date', render: () =>  <Label text={movie.release_date} />},
        { name: 'Duration', render: () => <Label text={`'${movie.runtime}`} />},
        { name: 'Budget Spent', render: () => <Label text={`$${movie.budget.toFixed(2)}`} />},
        { name: 'Total Income', render: () =>  <Label text={`$${movie.revenue.toFixed(2)}`} />}
    ]

    return (
        <div className="uppercase font-bold text-xs text-gray-700">
            {movieInfo.map(info => (
                <div className="my-1 bg-gray-100 px-1 py-2 rounded-md" key={info.name}>
                    <span>{info.name}</span>
                    {info.render()}
                </div>
            ))}
        </div>
    )
}

export default MovieInfo
