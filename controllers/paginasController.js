import {Viaje} from '../models/Viaje.js'
const paginaInicio = (req,res)=>{
    res.render('inicio',{
pagina: 'INICIO'
    });
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
const paginaTestimoniales = (req,res)=>{
    
    res.render('viajes',{
        pagina:'Testimoniales'
    });//el render busca una vista (en este caso .pug) lo cual escanea el nombre nosotros
    //en este caso y lo manda a la vista
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