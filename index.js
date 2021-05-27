const express = require("express");
const mysql = require("mysql");

const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Sanju@17",
    database:"employeeSystem"
}) 

app.post('/create', (req, res)=>{
    console.log(req.body)
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage= req.body.wage;

    db.query("INSERT INTO employeeDel(name,age,country,position,wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, results)=>{
        if(err){
            console.log(err);
        } else {
            res.Send("value is inserted");
        }
    }
    )
})

app.listen(3001, ()=>{
    console.log('hey, your server is rinning')
})