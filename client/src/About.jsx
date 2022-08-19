import './style.css'
import React from 'react'
import Header from './Header'
import av from './av.jpeg'
import linkedIn from './linkedIn.png'
import twitter from './twitter.png'
import sof from './sof.png'
import github from './github.png'
import fav from './fav.png'


function About () {

  return (<>
    <Header />
    <div className='about-container'>
      <img src={av} alt="" />
      <div>
        <h4>Who Are You?</h4>
        <p>
          I'm Zakaria Bennane,
          I was born in <a href='https://en.wikipedia.org/wiki/Casablanca'>this</a> city during the dot com bubble. Currently, I study Marketing at <a href="https://en.wikipedia.org/wiki/American_University_of_Beirut">AUB</a> and build web projects on the side.
        </p>
        <h4>What Do You Like?</h4>
        <ol>
          <li>Travelling ✈</li>
          <li>EDM 🎛 & Rock 🎸</li>
          <li>Programming 👨‍💻</li>
          <li>Drama 🎭</li>
          <li>Jogging 🏃‍♂️</li>
        </ol>
        <h4>What's Unique About You?</h4>
        <p>
          Very open to new experiences.
        </p>
        <h4>What's Your Personality Type?</h4>
        <p>
          <a href="https://www.16personalities.com/profiles/39fcc76411111">Here.</a>
        </p>
        <h4>Where You Can Find Me?</h4>
        <p className='social'>
          <a href="https://www.linkedin.com/in/zakaria-bennane-6b789423a/"><img src={linkedIn} alt="" /></a>
          <a href="https://github.com/ZakariaBennane99?tab=overview&from=2022-08-01&to=2022-08-19"><img src={github} alt="" /></a>
          <a href="https://stackoverflow.com/users/16556467/zakaria-bennane"><img src={sof} alt="" /></a>
          <a href="https://twitter.com/zakaria_bennane"><img src={twitter} alt="" /></a>
        </p>
      </div>
    </div>
  </>)
}

export default About