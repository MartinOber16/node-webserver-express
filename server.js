const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers'); 

// Obtener el puerto
const port = process.env.PORT || 3000;

// Middlewares
app.use( express.static( __dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'martin ober'
    });
})

app.get('/about', function (req, res) {
    res.render('about');
})

app.get('/data', function (req, res) {
    let salida = {
        nombre: 'Martin',
        edad: 33,
        url: req.url
    }
    res.send(salida);
})
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})