import './style.css'
import React from 'react'
import Header from './Header'


function Blog ({ data }) {

  function capitalize(string) {
    const s = string.split(" ")
    const f = s.map(st => st.charAt(0).toUpperCase() + st.slice(1))
    return f.join(" ")
  }

  return (
    <>
      <Header />
      <div className='posts-container'>
        {
          data.map(el => {
            return (
              <a href={"/posts/" + el.fileName} style={{ all: "unset" }}>
                <div className='container'>
                  <img src={el.img} alt="" />
                  <h1>{capitalize(el.fileName.split('.')[0].replace(/_/g, " "))}</h1>
                  <div>
                    <p>{el.date} <span>{el.category}</span></p>
                  </div>
                </div>
              </a>
              )
          })
        }
      </div>
    </>
  )
}

export default Blog