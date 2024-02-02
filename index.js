const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");

app.set("view engine", "ejs"); //configuramos el motor de plantillas EJS

//const indexRouter = require("./routes"); //importamos las rutas desde el archivo routes

app.use(router); //usar las rutas importadas

app.listen(port, () => {
  console.log(`Listening on http:/localhost:${port}`);
});
