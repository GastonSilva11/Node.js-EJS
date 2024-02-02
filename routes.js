const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const diaSemana = new Date().getDay();
  let mensaje = "";
  if (diaSemana >= 1 && diaSemana <= 5) {
    mensaje = "Hoy es dia de semana";
  } else {
    mensaje = "Hoy es fin de semana";
  }

  return res.render("index", { mensaje: mensaje });
});

router.get("/productos", (req, res) => {
  //Ruta para el endpoint productos
  const productos = ["Notebook", "Impresora", "Monitor"];
  res.render("productos", { productos });
});

module.exports = router;
