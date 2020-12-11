import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

import dotenv from "dotenv";
dotenv.config({ path: 'variables.env' });

const app= express();

//Conectar la base de datos
db.authenticate().then(()=>console.log('Base de datos conectada')). //promise (resolve,reject)
catch(error=>console.log(error));


//Definimos puerto
const port = process.env.PORT||4000;
//En esta terniaria se escoge la via a seguir entre un puerto que esta dado ya sea por uno o por el mismo server/hoster
//o local también coloca el puerto encargado como segunda opcion que uno escoga o tenga e mente, también puede colocar una opcion
//vacia que lo identifique el server y sepa decidir


//Habilitar pug
app.set('view engine','pug');

//Obtener el año actual
app.use((req,res,next)=>{
const year = new Date();

res.locals.actualYear = year.getFullYear();
    next();
});
//Agregar body parse
app.use(express.urlencoded({extended: true}));

//Definimos la carpeta publica
app.use(express.static('public'));
//Agregamos el router
app.use('/',router);

app.listen(port,()=>{
    console.log('el servidor esta funcionando en el puerto '+port);
})
//Puerto y host para la app
const host = process.env.HOST ||'0.0.0.0';
app.listen(port,host,()=>{
    console.log("el servidor esta funcionando");
});