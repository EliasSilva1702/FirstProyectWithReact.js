import './App.css'
import './index.css'
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import conex from './components/conex.jsx'

import Header from './components/Header.jsx'
import Login from './components/login/Login.jsx'
import Register from "./components/register/Register.jsx"
import SectionProducts from './components/products/SectionProducts.jsx'
import Trending from './components/products/Trending.jsx'
import Contact from './components/Contact.jsx'
import Bags from './components/products/Bags.jsx'
import Shirts from './components/products/Shirts.jsx'

function App() {

  return (
    <main className='bg-[#edede9] max-w-[1180px] mx-auto '>

      <BrowserRouter>

        <Header />

        <Routes>

            <Route path="/" element={<SectionProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path='/contact' element={<Contact />} />
            <Route path='/trending' element={<Trending />} />

        </Routes>



      </BrowserRouter>
    </main>
  )
}

export default App
