import './style.css'
import React, { useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import axios from 'axios'

function PostController () {

  const [content, setContent] = useState()

  const editorRef = useRef(null)

  const [category, setCategory] = useState()

  const [loggedIn, setLoggedIn] = useState()

  const [error, setError] = useState()
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  function handleLogin (e) {
    const val = e.target.value
    const tar = e.target.name
    setLogin(prev => {
      if (tar === 'username') {
        return { ...prev, username: val }
      } else {
        return { ...prev, password: val }
      }
    }) 
  }

  async function loginToPost () {
    const url = "http://localhost:4000/login"
    try {
      const res = await axios.post(url, login)
      if (res.status === 200) {
        setLoggedIn(true)
      }
    } catch (err) {
      setError(err.response.data)
    }
    //console.log(res.status)
  }


  async function handlePost () {

    function getMonth (mInNum) {
      const toMonth = [{
        "0": "Jan"
      }, {
        "1": "Feb"
      }, {
        "2": "Mar"
      }, {
        "3": "Abr"
      }, {
        "4": "May"
      }, {
        "5": "Jun"
      }, {
        "6": "Jul"
      }, {
        "7": "Aug"
      }, {
        "8": "Sep"
      }, {
        "9": "Oct"
      }, {
        "10": "Nov"
      }, {
        "11": "Dec"
      }]
      return toMonth.find(el => el[mInNum])[mInNum] 
    }

    function getPostDate() {
      // getting the date of the post
      const date = new Date()
      const m = getMonth(date.getMonth())
      const d = date.getDate()
      const y = date.getFullYear()
      return m + " " + d + ", " + y
    }

    let tDoc = document.implementation.createHTMLDocument("for_title")
    let cDoc = document.implementation.createHTMLDocument("for_content")
    cDoc.body.append(content)
    tDoc.body.insertAdjacentHTML('beforeend', content)
    const t = tDoc.body.querySelector('h1').textContent.toLocaleLowerCase().split(" ").join("_")
    const url = "http://localhost:4000/publish"
    
    try {
      const res = await axios.post(url, { title: t, date: getPostDate(), category: category, content: cDoc.body.textContent } )
      if (res.status === 200) {
        alert("Success")
      }
    } catch (err) {
      console.log(err)
    }
  }

  function handleStuff () {
    if (editorRef.current) {
      console.log("asdf")
      setContent(editorRef.current.getContent())
    }
    handlePost()
  }

  return (
    <div className='login-container'>
      {
        loggedIn ?
        <div className='text-editor-holder'>
          <Editor
            apiKey='5734i6mc9n7cdv0uhid2v97ei8yc02hn1k3wau4cltctoczi'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'codesample'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help' + 'codesample',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }} />
          <div style={{ display: "flex", flexDirection: 'column', width: '20%', margin: '5px' }}>
            <label htmlFor="category">Category</label>
            <input type="text" id="category" onChange={(e) => {
              setCategory(e.target.value)
            }} />
          </div>
          <button onClick={handleStuff}>Publish</button>
        </div>
        : 
        <div className='login-holder'>
          {
            error ? <p>{error}</p> : ""
          }
          <input name='username' type="text" placeholder="Username" onChange={handleLogin} />
          <input name='password' type="password" placeholder="Password"  onChange={handleLogin} />
          <button onClick={loginToPost}>Login</button>
        </div>
      }
    </div>
  )
}

export default PostController
