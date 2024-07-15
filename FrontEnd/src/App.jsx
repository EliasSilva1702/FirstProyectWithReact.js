import './App.css'

import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './Components/Header'
import Login from './Components/login/Login.jsx'
import Register from "./Components/register/Register.jsx"
import BtnFollow from './Components/BtnFollow.jsx'


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
    <main className='bg-[#6c6f7d] h-screen'>
      <BrowserRouter>
    <Header />
      <BtnFollow/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App
