import React from 'react'
import Label from '../../components/common/Label'


const ActorInfo = ({ actor }) => {

    const actorInfo = [
        { name: 'Place of Birth', render: () => <Label text={actor.place_of_birth}/> },
        { name: 'Birth Date', render: () =>  <Label text={actor.birthday} />},
        { name: 'Appears In', render: () => <Label text={`${actor.movie_credits.cast.length} movies`} />}
    ]


    return (
        <div>
            <h1 className="text-4xl">{actor.name}</h1>
            <div className="uppercase font-bold text-xs text-gray-700 mb-5">
                {actorInfo.map(info => (
                    <div className="my-1 bg-gray-100 px-1 py-2 rounded-md flex flex-wrap items-center justify-center md:justify-start" key={info.name}>
                        <span>{info.name}</span>
                        {info.render()}
                    </div>
                ))}
            </div>
            <hr />
            <div className="mt-5">
                <p>{actor.biography}</p>
            </div>
        </div>
    )
}

export default ActorInfo
