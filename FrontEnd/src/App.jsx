import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Login from './page/Login/login'
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

      <Header />


    




      {/* <table className=''>
        <thead>
          <th>Name:</th>
          <th>LastName:</th>
          <th>mail:</th>
          <th>password:</th>
        </thead>

        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
                <td>{d.name}</td>
                <td>{d.lastName}</td>
                <td>{d.mail}</td>
                <td>{d.password}</td>
              </tr>
          ))}
        </tbody>
      </table>  */}

    </main>
  )
}

export default App
