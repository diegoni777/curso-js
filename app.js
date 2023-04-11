
import express from "express"
import mongoose from "mongoose";

import rutesv1 from "./router/RutasWeb.js"
import rutesv2 from "./router/Mascotas.js"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//Conexion a base de datos//
/*const mongoose = require('mongoose');

const user = 'usuariobd'
const password = 'passbd'
const dbName = 'veterinaria'

const uri = `mongodb+srv://${usuario}:${password}@cluster0.ncdk5.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))*/



//motor de vistas//
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + "/public"));

//rutas web//
app.use('/', rutesv1);
app.use('/', rutesv2);


  app.use((req, res, next) => {
    res.status(404).render("404",{error : "Pagina no disponible",
    error2 : "404"
});
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});