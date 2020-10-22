import React from "react";
import MovieCard from "./MovieCard";
// import StarRatings from "react-star-ratings";
// import { Link } from "react-router-dom";
// import Searchbar from "./Searchbar";
// import defaultMovie from '../img/default_movie.png'

const List = ({ movies }) => {
    console.log(movies)
    return (
    <>
        {/* <Searchbar /> */}
        <div className="container mx-auto py-4 flex flex-wrap">
            {movies.map((movie, i) => <MovieCard key={movie.id} i={i} movie={movie} />)}
        </div>
      </>
    )
}

export default List;
