import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/common/Loader';
import { getMovie } from '../queries'
import { FaPlayCircle } from "react-icons/fa";
import IconWrapper from '../components/common/IconWrapper';
import TrailerWindow from '../components/movie/TrailerWindow';
import MovieInfo from '../components/movie/MovieInfo';
import CastSlider from '../components/movie/CastSlider'
import SimilarMovies from '../components/movie/SimilarMovies';

const Movie = () => {
    let { movie_id } = useParams();

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)
    const [showTrailerWindow, setShowTrailerWindow] = useState(false)

    useEffect(() => {
        (async() => {
            const data = await getMovie(movie_id)
            setMovie(data)
            setIsLoading(false)
        })()
    }, [movie_id])


    if(isLoading) return <Loader />

    const moviePoster = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    const trailer = movie.videos.results.length > 0 ? movie.videos.results[0].key : 0

    return (
        <>
        <div className="container mx-auto py-4 px-3">
            <section className="flex flex-col md:flex-row flex-wrap w-full">
                <div className="flex-1 flex justify-center">
                  <img
                    src={moviePoster}
                    alt={movie.title}
                    className="w-auto mb-4 md:mb-0 md:w-3/5 rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  {/* MOVIE INFORMATION */}
                  <MovieInfo movie={movie}/>
                  
                  {/* TRAILER BUTTON */}
                  {trailer && (
                    <div className="mt-5 flex justify-center items-center md:justify-start">
                      <button 
                          className="uppercase text-sm font-bold flex justify-center items-center rounded-full py-2 px-4 text-white bg-purple" 
                          onClick={() => setShowTrailerWindow(true)}
                      >
                              <IconWrapper className="mr-1"><FaPlayCircle/></IconWrapper>
                              Watch Trailer
                      </button>
                  </div>
                  )}
                
                </div>
              </section>
            <section className="w-full">
                {/* MOVIE CAST */}
                <CastSlider cast={movie.credits.cast} />

                {/* SIMILA MOVIES */}
                <SimilarMovies similarMovies={movie.similar.results}/>
             </section>
              
          </div>
        { showTrailerWindow && <TrailerWindow trailerID={trailer} setShowTrailerWindow={setShowTrailerWindow}/> }

        </>
    )
}

export default Movie
