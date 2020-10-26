import React, { useState, useEffect } from 'react'
import IconWrapper from './common/IconWrapper'
import NavItems from './NavItems'
import { RiMenu3Fill } from 'react-icons/ri'
import { SiThemoviedatabase } from 'react-icons/si'
import { VscSearch } from 'react-icons/vsc'
import { useHistory } from 'react-router-dom'

import SearchBar from './common/SearchBar'

const Navbar = () => {
    const history = useHistory()
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(showSearchBar) document.getElementById('search').focus()
    }, [showSearchBar])
    
    return (
        <>
        <nav className="py-5 bg-red flex items-center" style={{ minHeight: '88px' }}>
            <div className="container relative mx-auto flex justify-between items-center px-2" >
                <div className="flex flex-1 justify-start items-center">
                    <div onClick={() => setShowSearchBar(!showSearchBar) }>
                        <IconWrapper color="white" className="w-5 h-5 cursor-pointer stroke-1 mr-2">
                            <VscSearch/>
                        </IconWrapper>
                    </div>
                    {showSearchBar && <SearchBar />}
                </div>
                <div onClick={() => history.replace("/")}> 
                    <IconWrapper color="white" className={`w-12 h-12 cursor-pointer ${showSearchBar ? 'hidden md:block' : ''}`}>
                        <SiThemoviedatabase />
                    </IconWrapper>
                </div>     
                <div onClick={() => setOpen(true)} className="flex flex-1  justify-end items-center">
                    <IconWrapper color="white" className="w-6 h-6 cursor-pointer">
                        <RiMenu3Fill />
                    </IconWrapper>   
                </div>
            </div>
        </nav>
        <NavItems open={open} setOpen={setOpen}/>
        </>
    )
}

export default Navbar
