const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();
require('./hbs/helpers');

// Obtener el puerto
const port = process.env.PORT;

// Middlewares
app.use( express.static( __dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'martin ober'
    });
})

app.get('/about', (req, res) => {
    res.render('about');    
})

app.get('/data', (req, res) => {
    let salida = {
        nombre: 'Martin',
        edad: 33,
        url: req.url
    }
    res.send(salida);
})

// app.get('*', (req, res) => {
//     res.render('404 | Page not found');
// })

 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})