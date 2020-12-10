const guardarTestimonial = (req,res)=>{
    //validamos el formulario

    const {nombre,correo,mensaje} = req.body;
    if(nombre.trim ===''){
        console.log('el nombre esta vacio')
    }
    if(correo.trim ===''){
        console.log('el nombre esta vacio')
    }
    if(mensaje.trim ===''){
        console.log('el nombre esta vacio')
    }
    res.render('testimoniales',()=>{
pagina: 'testimoniales',
nombre,
correo,
mensaje
    })
}
export {
    guardarTestimonial,
}