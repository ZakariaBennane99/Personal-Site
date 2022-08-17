import './style.css'
import Blog from './Blog'
import axios from 'axios'
import Header from './Header'
import { useState, useEffect } from 'react'


function BlogController () {

  const [posts, setPosts] = useState()

  useEffect(() => {
    async function getPosts () {
      console.log('Inside')
      const url = "http://localhost:4000/posts"
      try {
        const res = await axios.get(url)
        console.log(res.data)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [])

  if (!posts) {
    return (
      <>
        <Header />
        <div className='loader-holder' style={{ height: '500px'}}>
          <div className="loader" style={{ width: '100px', height: '100px' }}></div>
        </div>
      </>)
  } 
  
  return (
    <Blog data={posts} />
  )
}

export default BlogController