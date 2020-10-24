import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <main className="bg-darkgrey">
            <Navbar />
            {props.children}
        </main>
    )
}

export default Layout
