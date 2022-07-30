const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000

const static_path = path.join(__dirname,"../public");

app.set('view engine' , 'hbs')
app.use(express.static(static_path))


// routing
app.get("/" , (req,res) =>{
    res.render('index.hbs')
})

app.get("/about" , (req,res) =>{
    res.render('about')
})

app.get("/weather" , (req,res) =>{
    res.render('weather')
})

app.get("*" , (req,res) =>{
    res.render("404error" ,{
        errorMsg: 'Oops !! Page Not Found'
    })
})

app.listen(port , ()=>{
    console.log(`listening to port no ${port}`)
});

// PS C:\Users\sahir\OneDrive\Desktop\WeatherApp\expressWeb\src> node app.js 
