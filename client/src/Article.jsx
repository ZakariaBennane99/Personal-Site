import './style.css'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'


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