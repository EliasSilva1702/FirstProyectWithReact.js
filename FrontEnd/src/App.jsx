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

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)


  return (
    <main className='bg-[#edede9] max-w-[1180px] mx-auto '>

      <BrowserRouter>

        <Header
          allProducts={allProducts} setAllProducts={setAllProducts}
          total={total} setTotal={setTotal}
          countProducts={countProducts} setCountProducts={setCountProducts}
        />

        <Routes>

          <Route path="/"
            element={<SectionProducts
              allProducts={allProducts} setAllProducts={setAllProducts}
              total={total} setTotal={setTotal} 
              countProducts={countProducts} setCountProducts={setCountProducts} />}
          />
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
