const express = require('express')
const path = require('path')

const app = express()


app.get('/', function(req, res) {    
  res.sendFile(path.join(__dirname, "./public/home.html"))
})

app.get('/styles', function (req,res) {
  res.sendFile(path.join(__dirname, "./public/home.css"))
})



const port = process.env.PORT || 3210


app.listen(port, () => {
    console.log(`Commencing countdown, engines on: ${port}`)})



    