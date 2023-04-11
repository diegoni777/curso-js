import express from 'express';
const router = express.Router();

const Mascota = ('../models/mascotas.js')

router.get('/mascotas',async(req, res) => {

try {

    const arrayMascotasDB = await Mascota.find()
    console.log(arrayMascotasDB)
    
} catch (error) {
    console.log(error)
    
}
    res.render("mascotas", 
    {arrayMascotas: [
           {id:'1' , nombre:'diego', descripcion:'diego descripcion'},
           {id:'2' , nombre:'aaron', descripcion:'aaron detalles'},

    ]})
})

export default router;