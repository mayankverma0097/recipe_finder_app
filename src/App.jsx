import React from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Recipes from './Pages/Recipes'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
