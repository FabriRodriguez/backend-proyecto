const express = require ('express')
const app = express ()
const port = 5000
//definicion de endpoint get en ruta principal
app.get('/', (request, response) => {
    response.send('hola mundo!')
});

//listen = escuchar
app.listen(puerto, ()=> {
    console.log('escuchando el puerto ' + puerto)
});

//hola mundo
