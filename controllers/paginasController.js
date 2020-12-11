import {Viaje} from '../models/Viaje.js'
import {Testimonial} from '../models/Testimoniales.js'
const paginaInicio = async (req,res)=>{

    //Consultar tres viajes del modelo viaje
    const promiseDB=[];
    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio',{
            pagina: 'INICIO',
            clase: 'home',
            viajes: resultado[0],
            testimoniales:resultado[1]
                });
    } catch (error) {
        console.log(error);
    }
  
}
const paginaNosotros = (req,res)=>{
    const viajes = 'Viaje a Alemania';
    
    res.render('nosotros',{
        viajes,
        pagina: 'nosotros'
    });//el render busca una vista (en este caso .pug) lo cual escanea el nombre nosotros
    //en este caso y lo manda a la vista
}
const paginaContacto = (req,res)=>{
    res.send('Hola CONTACTO');
}
const paginaViajes = async (req,res)=>{
    //Consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes);
    res.render('viajes',{
        pagina:'VIAJE',
        viajes,
    });//el render busca una vista (en este caso .pug) lo cual escanea el nombre nosotros
    //en este caso y lo manda a la vista
}
const paginaTestimoniales = async (req,res)=>{
    
    try {
        const testimoniales= await Testimonial.findAll({limit:3});
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        });//el render busca una vista (en este caso .pug) lo cual escanea el nombre nosotros
        //en este caso y lo manda a la vista
    } catch (error) {
     console.log(error);   
    }
}
//Muestra un viaje por su slug
const paginaDetallesViaje = async (req,res)=>{
   const {viaje} = req.params;

   try {
       const resultado= await Viaje.findOne({where: {slug:viaje}});

       res.render('viaje',{
           pagina: 'informacion viaje',
           resultado,
       })
   } catch (error) {
       console.log(error);
   }

}
export {
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaViajes,
    paginaTestimoniales,
    paginaDetallesViaje
}