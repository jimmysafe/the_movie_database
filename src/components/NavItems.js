import React, { useEffect, useState } from 'react'
import { getGenresList } from '../queries'
import { NavLink } from 'react-router-dom'
import IconWrapper from './common/IconWrapper'
import { IoIosClose } from 'react-icons/io'

const NavItems = ({ setOpen, open }) => {
    const [genres, setGenres] = useState([])
        
    useEffect(() => {
        (async() => {
            const data = await getGenresList()
            setGenres(data.genres)
        })()
    }, [])

    return (
        <div className="fixed left-0 w-screen h-screen bg-lightgrey z-50 transition-all duration-500 ease-in-out" style={{ top: open ? 0 : '-100%' }}>
            <div className="container mx-auto relative flex justify-center items-center h-screen">
                <div className="absolute cursor-pointer" style={{ right: 0, top: 30 }} onClick={() => setOpen(false)}>
                    <IconWrapper color='white' className="w-12 h-12">
                        <IoIosClose />
                    </IconWrapper>
                </div>
                <ul className="flex flex-col uppercase text-xs font-bold text-red justify-center items-center">
                    {genres.map(genre => (
                        <NavLink key={genre.id} exact to={`/genre/${genre.id}`} activeClassName="active" onClick={() => setOpen(false)}>
                            <li className="mb-2 cursor-pointer">{genre.name}</li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavItems
