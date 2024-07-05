import express from 'express';
import router from './routes/index.js';
import db from "./config/db.js";



// const express = require('express');
const app = express();

db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error => console.log(error));

const port = process.env.PORT || 3000;

app.set('view engine','pug');

app.use((req,res,next)=>{
 const year=new Date().getFullYear();
 res.locals.actualYear=year;
 res.locals.nombreSitio="Agencia de viajes";
    next();
});
//Agregar body parser para leer datos del formulario
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(router);

app.listen(port,()=>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});