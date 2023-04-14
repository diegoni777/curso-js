import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mascotasSchema = Schema({
    nombre: String,
    descripcion: String,
})

// crear modelo//

const Mascotas = mongoose.model('Mascota',mascotasSchema);
export default Mascotas;