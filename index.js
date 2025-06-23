const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor Funcionado Correctamente');
    console.log('Servidor Funcionando');
});



app.listen(10000);