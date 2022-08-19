import './style.css'
import Blog from './Blog'
import React from 'react'
import axios from 'axios'
import Header from './Header'
import { useState, useEffect } from 'react'


function BlogController () {

  const [posts, setPosts] = useState()

  function getMonth (m) {
    const toMonth = [{
      "Jan": 0 
    }, {
      "Feb": 1 
    }, {
      "Mar": 2 
    }, {
      "Abr": 3 
    }, {
      "May": 4 
    }, {
      "Jun": 5 
    }, {
      "Jul": 6 
    }, {
      "Aug": 7 
    }, {
      "Sep": 8 
    }, {
      "Oct": 9 
    }, {
        "Nov": 10 
    }, {
        "Dec": 11 
    }]
    return toMonth.find(el => el[m])[m] 
  }

  function compare (a, b) {
    const xa = a.date.split(',')
    const za = xa[0].split(' ')
    const ayear = parseInt(xa[1].substring(1,))
    const amonth = getMonth(za[0])
    const aday = parseInt(za[1])
    const xb = b.date.split(',')
    const zb = xb[0].split(' ')
    const byear = parseInt(xb[1].substring(1,))
    const bmonth = getMonth(zb[0])
    const bday = parseInt(zb[1])
    console.log(xa)
    if ( ayear < byear || amonth < bmonth || aday < bday){
      return -1
    }
    if ( a.last_nom > b.last_nom ){
      return 1
    }
    return 0
  }

  useEffect(() => {
    async function getPosts () {
      console.log('Inside')
      const url = "http://localhost:4000/posts"
      try {
        const res = await axios.get(url)
        const sorted = res.data.sort(compare).reverse()
        setPosts(sorted)
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