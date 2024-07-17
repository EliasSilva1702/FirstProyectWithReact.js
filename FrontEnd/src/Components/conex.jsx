import React from 'react'

function conex() {
    const [data, setData] = useState([])
    
      useEffect(() => {
        //Conecto el front con la API de Backend
         fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
      },[])

    }
export default conex
