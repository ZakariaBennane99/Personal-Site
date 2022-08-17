import './style.css'
import React from 'react'
import Header from './Header'


function Post ({ data, date, category }) {

  const w = window.innerWidth

  return (
  <div className='the-actual-post'>
    <Header />
    <div style={{ margin: "120px 50px 50px 50px", width: '96%', display: "flex", justifyContent: "center" }}>
      <div dangerouslySetInnerHTML={{__html: `<p id='meta'>${date} <span>${category.toUpperCase()}</span></p>` + data}}  style={{ width: w < 800 ? '90%' : '600px' }}/>
    </div>
  </div>
  )
}


export default Post