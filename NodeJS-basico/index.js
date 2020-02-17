const os = require('os');//operatve systema
const fs = require('fs');//file system
const http = require('http');
const colores = require('colors');
const express = require('express');

/*console.log(os.platform());
console.log(os.release());
console.log('free mem: ',os.freemem());//en bytes
console.log('total mem: ',os.totalmem());//en bytes
*/

//Codigo asincrono, ayuda a mejorar la concurrencia de usuarios
//la funcion la hace el OS o la BD, etc,  espera la respuesta de esas tareas y luego las realiza
//la funcion es un callback
//---------------CODIGO DE ESCRITURA DE ARCHIVO----------------
/*fs.writeFile('./texto.txt','Linea 1', function(err){
    if(err){
        console.log(err)
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');
*/
//--------------CODIGO LECTURA DE ARCHIVO---------------------
/*fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});*/
/*
//------------------------CODIGO CREACION DE SERVIDOR NODEJS---------------------
const handleServer = function(req,res){
    res.writeHead(200, {'Content-type':'text/html'})
    res.write('<h1>Hola mundo</h1>')
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000,function(){
    console.log('Servidor en el puerto 3000'.green);
});*/

//---------------------------------EXPRESS PARA CREAR SERVIDOR-----------------------

const server = express();

server.get('/', (req,res)=>{
    res.send('<h1>Hola mundo con NodeJS y Express</h1>')
})

server.listen(3000,function(){
    console.log('Server started on 3000 port'.blue);
});