

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

app.get("/", (re, res) => {
    return res.json("From Backend side")
})

//Create conex DataBase
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "firstproyect"
}) 


app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data) => {
        
        if(err) {
       
            return res.json(err)
       
        }else {

            return res.json(data)
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})