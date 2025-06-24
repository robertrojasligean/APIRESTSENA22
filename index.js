const express = require('express');
const app = express();

//configuracion de la base de datos 
//con el mongo atlas a través de mongoose

const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
//La peticion que llegue la convierto a formato json 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// express contiene y me permite realizar el crud
// pero lo llamo con la constante app
// los métodos del crud son get, post, put, delete
// los va a encontrar en post.js que es el de las rutas

const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

//Realizo la conexión a la base de datos
mongoose.connect('mongodb+srv://robert11unofirst:gKEMlNepEKPFdtLx@pruebamodulo.hvuvu29.mongodb.net/modulo6?retryWrites=true&w=majority&appName=pruebamodulo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// creo una constante para la conexión a las bd
// y la llamo con mongoose.connection
// para no tener que llamar la conexión cada vez que la necesite
const connecction = mongoose.connection;
connecction.once('open', () => {
    console.log('Conexión a la base de datos establecida correctamente');
});


/* app.get('/', (req, res) => {
    res.send('Servidor Funcionado Correctamente');
    console.log('Servidor Funcionando');
}); */


// puerto por el que va a escuchar el servidor
app.listen(10000);