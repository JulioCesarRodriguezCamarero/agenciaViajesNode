import {Testimonial} from '../models/testimoniales.js';

const guardarTestimonial = async (req, res) => {
    //Validar
    const errores=[];
    const {nombre, email, mensaje} = req.body;
    if (nombre.trim() === '') {
        errores.push({mensaje:'El nombre está vacío'});
    }
    if (email.trim() === '') {
        errores.push({mensaje:'El correo está vacío'});
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje:'El mensaje está vacío'});
    }
    if (errores.length >0){
        const testimoniales= await Testimonial.findAll();
        res.render('testimoniales',{
            pagina:'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        });
    }else {
        //Almacenar en la base de datos
        try {
             await Testimonial.create({
                 nombre,
                 email,
                 mensaje
             });
             res.redirect('/testimoniales');
            }catch(error){
                console.log(error);
            }
    }
}
export {
    guardarTestimonial
}