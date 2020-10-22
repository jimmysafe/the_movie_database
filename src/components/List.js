import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
// import Searchbar from "./Searchbar";
// import defaultMovie from '../img/default_movie.png'

const List = ({ movies }) => {
    return (
    <>
        {/* <Searchbar /> */}
        <div className="container mx-auto py-4 flex flex-wrap">
            {movies.map((movie, i) => (
                <div className="w-1/2 md:w-1/3 lg:w-1/4 px-2 pb-2 mb-4" key={i}>
                    <Link to={{ pathname: `/movie/${movie.id}` }}>
                        <MovieCard movie={movie} />
                    </Link>
                </div>
            ))}
        </div>
      </>
    )
}

export default List;
