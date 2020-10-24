import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getMovieCast } from '../../queries'

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

const CastSlider = () => {
    const [cast, setCast] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { movie_id } = useParams()

    useEffect(() => {
        (async() => {
            setIsLoading(true)
            const data = await getMovieCast(movie_id)
            setCast(data.cast.slice(0, 50))
            setIsLoading(false)
        })()
    }, [movie_id])

    const settings = {
        initialSlide: 0,
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
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
        <div className="mt-12">
            <h3 className="text-center font-bold uppercase mb-2">Cast</h3>
            <div className="md:w-2/3 w-full mx-auto" >
                <Slider {...settings}>
                    {cast && cast.map(actor => (
                        <SliderActor 
                            id={actor.id}
                            key={actor.id} 
                            name={actor.name} 
                            image={!actor.profile_path || isLoading ? '/logo512.png' : `https://image.tmdb.org/t/p/w300${actor.profile_path}`} 
                        />) )}
                </Slider>
            </div>
        </div>
    )
}

export default CastSlider
