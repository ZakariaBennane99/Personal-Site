import './style.css'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import Login from './Login'
import BlogController from './BlogController'
import PostController from './PostController'


function Routerswitch () {

  const Home = () => useRoutes([
    { path: "/home", element: <BlogController /> },
    { path: "/", element: <BlogController /> }
  ])

  return (
    <BrowserRouter>
        <Home />
        <Routes>
            ```public routes```
            <Route path='/blog' element={ <BlogController /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/projects' element={ <Projects/> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/posts/:postId' element={ <PostController /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Routerswitch
