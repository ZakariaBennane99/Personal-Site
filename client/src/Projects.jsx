import './style.css'
import { Link } from 'react-router-dom'
import Header from './Header'


function Projects () {

  return (
    <>
      <Header />
      <div className='projects-holder'>
        <div class="timeline">
          <div class="proj-container left">
            <div class="content">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div class="proj-container right">
            <div class="content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects