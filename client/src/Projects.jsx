import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


function Projects () {

  return (
    <>
      <Header />
      <div className='projects-holder'>
        <div class="timeline">
          <div class="proj-container right">
            <div class="content">
              <div>
                <h3 style={{ margin: "0px" }}>Aug, 2022</h3>
                <a href="http://proderto.com" target="_blank" rel="noreferrer">Proderto.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects