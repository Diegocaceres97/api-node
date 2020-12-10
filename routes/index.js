import express from "express";
import {guardarTestimonial} from '../controllers/testimonialController.js'
import {
  paginaInicio,
  paginaNosotros,
  paginaContacto,
  paginaViajes,
  paginaTestimoniales,
  paginaDetallesViaje
} from "../controllers/paginasController.js";
const router = express.Router(); //de esta manera se utiliza la misma instancia de express pero estamos extendiendo o utilizando su router
const manner = "CONTENIDO";
router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/contacto", paginaContacto);
router.get("/viajes", paginaViajes);
router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);
router.get("/viajes/:viaje", paginaDetallesViaje);
export default router;
