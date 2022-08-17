import './style.css'
import React from 'react'



function Header () {

    return (
        <div className='header'>
            <h1>Zakaria Bennane</h1>
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
