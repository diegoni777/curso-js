
import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import rutesv1 from "./router/RutasWeb.js"
import rutesv2 from "./router/Mascotas.js"
import crear from "./router/Mascotas.js"
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

import dotenv from "dotenv"
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
dotenv.config();

//Conexion a base de datos//
const PORT = process.env.PORT || 3000;
const uri =  `mongodb://${process.env.USER}:${process.env.PASSWORD}@${'216.98.8.92'}:${'27017'}/${process.env.DBNAME}?authSource=admin`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex:true
  })
  .then((res) => console.log(`Conexion con mongo al host: ${'216.98.8.92'} & Base de Datos ${process.env.DBNAME}`))
  .catch((err) => {
    console.log({ err });
  });


//motor de vistas//
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + "/public"));

//rutas web//
app.use('/', rutesv1);
//app.use('/', rutesv2);
app.use('/mascotas', crear);


  app.use((req, res, next) => {
    res.status(404).render("404",{error : "Pagina no disponible",
    error2 : "404"
});
  });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});