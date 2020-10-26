import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const SliderActor = ({ name, image, id }) => {
    return (
        <div className="text-center p-2 cursor-pointer" >
            <Link to={{ pathname: `/actors/${id}` }}>
                <img 
                    style={{ minHeight: '255px' }}
                    className="w-full rounded-lg mb-2" 
                    src={image}
                    alt={name}
                />
                <span className="font-bold text-center text-gray-300 text-xs uppercase">{name}</span>
            </Link>
        </div>
    )
}

const HomeCastSlider = ({ cast }) => {

    const settings = {
        initialSlide: 0,
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    autoplay: false,
                    arrows: true              
                }
            },
            {
                breakpoint: 500,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false              
                }
            }
        ]
    };

    return (
        <div className="mt-5">
            <h2 className="font-semibold uppercase text-center py-2">Popular Actors</h2>
                <Slider {...settings}>
                    {cast.map(actor => (
                        <SliderActor 
                            id={actor.id}
                            key={actor.id} 
                            name={actor.name} 
                            image={!actor.profile_path ? '/images/avatar_placeholder.svg' : `https://image.tmdb.org/t/p/w300${actor.profile_path}`} 
                        />) )}
                </Slider>
        </div>
    )
}

export default HomeCastSlider
