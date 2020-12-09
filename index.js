import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

const app= express();

//Conectar la base de datos
db.authenticate().then(()=>console.log('Base de datos conectada')). //promise (resolve,reject)
catch(error=>console.log(error));
//Definimos puerto
const port = process.env.PORT||4000;

//Habilitar pug
app.set('view engine','pug');

app.use((req,res,next)=>{
const year = new Date();

res.locals.actualYear = year.getFullYear();
    next();
});

//Definimos la carpeta publica
app.use(express.static('public'));
//Agregamos el router
app.use('/',router);

app.listen(port,()=>{
    console.log('el servidor esta funcionando en el puerto '+port);
})