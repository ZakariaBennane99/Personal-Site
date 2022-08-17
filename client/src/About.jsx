import './style.css'
import Header from './Header'
import av from './av.jpg'


function About () {

  return (<>
    <Header />
    <div className='about-container'>
      <img src={av} alt="" />
      <div>
        <p>
          Hi My name is Puss In Boots! and I love being cuddled.
        </p>
      </div>
    </div>
  </>)
}

export default About