import './style.css'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import img from './cat.jpg'


function Article () {

    const { postId } = useParams()

    return (
      <>
        <Header />
        <div className='article-container'>
            
        </div>
      </>
    )
}

export default Article