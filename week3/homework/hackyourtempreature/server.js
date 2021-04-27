const express = require('express')

const app = express()
const exphbs=require('express-handlebars')
const port = 3000
const axios = require('axios')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.get('/',(req,res)=>{
res.render('index')
})

app.post('/weather',(req,res)=> {
    const cityName = req.body.cityName
    const API_KEY = require('./sources/keys.json').API_KEY;
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
.then((response)=>{
    console.log(response)
    res.render('index',{cityName:`${cityName}`,temperature:`${response.data.main.temp}`})
})
.catch((err)=>{
    res.render('index',{weatherText: "City is not found!"})
console.log(err)
})
} )

app.listen(port,()=>{
    console.log(`server is working on port : ${port}`)
})