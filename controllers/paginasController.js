import {Viaje} from '../models/Viaje.js'
import {Testimonial} from '../models/Testimoniales.js'
const paginaInicio = async (req,res)=>{

    //Consultar tres viajes del modelo viaje
    try {
        const viajes = await Viaje.findAll({limit:3});
        res.render('inicio',{
            pagina: 'INICIO',
            clase: 'home',
            viajes
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
        const testimoniales= await Testimonial.findAll();
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