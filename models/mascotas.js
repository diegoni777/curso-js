const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotasSchema = Schema({
    nombre: String,
    descripcion: String,
})

// crear modelo//

const Mascota = mongoose.model('Mascota',mascotasSchema);

module.exports = Mascota;