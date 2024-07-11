function conexionDB() {

    const [data, setData] = useState([])

  useEffect(() => {
    //Conecto el front con la API de Backend
    const ConexionBack =  fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
  },[])

  return ConexionBack()
}

export default ConexionBack