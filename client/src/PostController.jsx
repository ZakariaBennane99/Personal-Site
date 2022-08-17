import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Post from './Post'
import Header from './Header'

function PostController () {
  
  const { postId } = useParams()

  const [post, setPost] = useState()

  const [date, setDate] = useState()

  const [category, setCategory] = useState()

  useEffect(() => {
    async function getPost () {
      const url = "http://localhost:4000/post"
      try {
        const res = await axios.get(url, {
          headers: {'fileName': postId }
        })
        setPost(res.data)
        const s = postId.split(".")
        const category = s[1]
        setCategory(category)
        const date = s[2]
        setDate(date)
      } catch (err) {
        console.log(err)
      }
    }
    getPost()
  }, [])



  if (!post) {
    return (
      <>
        <Header />
        <div className='loader-holder' style={{ height: '500px'}}>
          <div className="loader" style={{ width: '100px', height: '100px' }}></div>
        </div>
      </>)
  } 
  
  return (
    <Post data={post} date={date} category={category} />
  )

}


export default PostController
