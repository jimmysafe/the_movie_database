import React, { useEffect, useState } from 'react'
import { getActor } from '../queries'
import { useParams } from 'react-router-dom'
import Loader from '../components/common/Loader'
import ActorInfo from '../components/actor/ActorInfo'
import List from '../components/List'

const Actor = () => {
    const { actor_id } = useParams()

    const [actor, setActor] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async() => {
            const data = await getActor(actor_id)
            setActor(data)
            setIsLoading(false)
        })()
    }, [actor_id])

    console.log(actor)

    if(isLoading) return <Loader />

    const actorPhoto = actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : '/logo512.png'

    return (
        <div className="container mx-auto py-4 px-3">
            <section className="flex flex-col md:flex-row flex-wrap w-full">
                <div className="flex-1 flex justify-center items-start">
                    <img
                        src={actorPhoto}
                        alt={actor.name}
                        className="w-auto mb-4 md:mb-0 md:w-3/5 rounded-lg"
                    />
                </div>
                <div className="flex-1">
                   <ActorInfo actor={actor} />
                </div>
            </section>
            <section className="w-full mt-12">
                <h3 className="text-center font-bold uppercase mb-2">Appears also in</h3>
                <List movies={actor.movie_credits.cast}/>
            </section>
        </div>
    )
}

export default Actor
