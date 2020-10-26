import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const HomeSlider = ({ movies, title, slidesToShow, slidesToScroll, height, responsive }) => {

    let _responsive = []
    if(responsive) _responsive = responsive

    const settings = {
        initialSlide: 0,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow,
        slidesToScroll,
        autoplay: true,
        responsive: _responsive
    };

    return (
        <div className="mt-5">
            <h2 className="font-semibold uppercase text-center py-2">{title}</h2>
            <Slider {...settings}>
                {movies && movies.map(movie => (
                    <div key={movie.id} className="text-center p-2 cursor-pointer" >
                        <Link to={{ pathname: `/movie/${movie.id}` }}>
                            <div
                                className="flex justify-center items-center bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden" 
                                style={{ 
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`,
                                    height
                                }}
                            >
                                <p className="font-bold text-center text-gray-300 bg-red p-2 text-xs uppercase">{movie.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )   
}

export default HomeSlider
