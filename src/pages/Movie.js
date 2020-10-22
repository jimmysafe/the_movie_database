import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import { getMovie } from '../queries'
import StarRatings from 'react-star-ratings'
import { FaPlayCircle } from "react-icons/fa";
import IconWrapper from '../components/IconWrapper';
import TrailerWindow from '../components/TrailerWindow';
import MovieInfo from '../components/MovieInfo';

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
        <div className="container mx-auto flex flex-wrap py-4">
     
              <div className="flex-1 flex justify-center">
                <img
                  src={moviePoster}
                  alt={movie.title}
                  className="w-3/5 rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                  <div>
                    <h1 className="text-4xl">{movie.title}</h1>
                    <StarRatings
                        rating={movie.vote_average / 2}
                        starDimension="15px"
                        starSpacing="1px"
                        starRatedColor="#F4442E"
                        starEmptyColor="lightgrey"
                      />
                    <h6 className="mt-3 mb-3">{movie.tagline}</h6>
                    <MovieInfo movie={movie}/>
                    <p className="mt-3">{movie.overview}</p>
                  </div>
                
                {trailer && (
                  <div className="mt-5">
                    <button 
                        className="uppercase text-sm font-bold flex justify-center items-center rounded-full py-2 px-4 text-white bg-purple" 
                        onClick={() => setShowTrailerWindow(true)}
                    >
                            <IconWrapper className="mr-1"><FaPlayCircle/></IconWrapper>
                            Watch Trailer
                    </button>
                </div>
                )}
                
                
           
                <div className="mt-5">
                    {/* <CastSlider cast={cast} /> */}
                </div>
       
            </div>
            {/* <div
              className="row mt-5 animated fadeIn"
              style={{ animationDelay: "2s" }}
            >      
              <MoreMovies movies={similar} title="Similar" fetchApi={this.fetchApi}/>
            </div> */}
          </div>
        { showTrailerWindow && <TrailerWindow trailerID={trailer} setShowTrailerWindow={setShowTrailerWindow}/> }
        </>
    )
}

export default Movie
