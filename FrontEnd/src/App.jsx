import './App.css'
import './index.css'
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './Components/Header'
import Login from './Components/login/Login.jsx'
import Register from "./Components/register/Register.jsx"
import SectionProducts from './Components/products/SectionProducts.jsx'
import Trending from './Components/products/Trending.jsx'
import Contact from './Components/Contact.jsx'

function App() {


  const [data, setData] = useState([])

  useEffect(() => {
    //Conecto el front con la API de Backend
     fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
  },[])
  
  return (
    <main className='bg-[#edede9] max-w-[1180px] mx-auto '>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        
        <SectionProducts/>
          <Contact id="Contact"/>

      </BrowserRouter>

    </main>
  )
}

export default App
