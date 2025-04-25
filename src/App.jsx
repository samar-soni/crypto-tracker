import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import './App.css'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'
import Prices from './pages/Pricing/Prices'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/coin/:coinId' element = {<Coin/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path='/prices' element = {<Prices/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
