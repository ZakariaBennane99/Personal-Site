import './style.css'
import React from 'react'
import Favicon from 'react-favicon'
import fav from './fav.png'



function Header () {

    const w = window.innerWidth
    console.log(w)

    return (
        <div className='header'>
            <Favicon url={fav} />
            <h1>{w < 600 ? 'ZB' : 'Zakaria Bennane'}</h1>
            <div className='menu-holder'>
                <a href='/blog'><div>Blog</div></a>
                <a href='/projects'><div>Projects</div></a>
                <a href='/about'><div>About</div></a>
            </div>
            <div></div>
        </div>
    )
}

export default Header
