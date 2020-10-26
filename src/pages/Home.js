import React, { useEffect, useState } from 'react'
import Loader from '../components/common/Loader'
import HomeCastSlider from '../components/home/HomeCastSlider'
import HomeSlider from '../components/home/HomeSlider'
import { getCategory, getPopularActors } from '../queries'

const Home = () => {

    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        (async() => {
            const upcoming = await getCategory('upcoming')
            const popular = await getCategory('popular')
            const top_rated = await getCategory('top_rated')
            const actors = await getPopularActors()
            setData({
                upcoming: upcoming.results,
                popular: popular.results,
                top_rated: top_rated.results,
                actors: actors.results
            })
            setIsLoading(false)
        })()
    }, [])

    if(isLoading) return <Loader />


    // console.log(data)

    return (
        <div className="container mx-auto flex justify-between items-start flex-wrap">
            <section className="w-full md:w-8/12">
                <HomeSlider 
                    title="Upcoming Movies" 
                    movies={data.upcoming} 
                    slidesToShow={1} 
                    slidesToScroll={1}
                    height="50vh"
                    link="/upcoming"
                />
            </section>
            <section className="w-full md:w-4/12 ">
                <HomeSlider 
                    title="Popular Movies" 
                    movies={data.popular} 
                    slidesToShow={1} 
                    slidesToScroll={1}
                    height="50vh"
                    link="/popular"
                />
            </section>
            <section className="w-full">
                <HomeSlider 
                    title="Top Rated Movies" 
                    movies={data.top_rated} 
                    slidesToShow={4} 
                    slidesToScroll={1}
                    height="400px"
                    link="/top_rated"
                    responsive={[
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
                    ]}
                />
            </section>
            <section className="w-full">
                <HomeCastSlider cast={data.actors}/>
            </section>
        </div>
    )
}

export default Home
