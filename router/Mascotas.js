import express from 'express';
const router = express.Router();
import bodyParser from "body-parser";
import Mascotas from '../models/mascotas.js'

//const Mascotas = ('../models/mascotas.js')

router.get('/',async(req, res) => {

try {

    const arrayMascotasDB = await Mascotas.find({})
    console.log(arrayMascotasDB)

    res.render("mascotas", 
    {arrayMascotas: arrayMascotasDB })
    
} catch (error) {
    console.log(error)
    
}
    

})

//crear//
router.get('/crear', (req, res) => {
    
    res.render("crear")
})
//guardar//
router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const mascotaDB = await Mascotas.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    }
})

//leer//
router.get('/:id', async (req, res) => {
    const id = req.params.id
try {
    const mascotaDB = await Mascotas.findOne({_id : id})
    console.log(mascotaDB)

    res.render('detalle',{
        mascota :mascotaDB,
        error : false
    })
    
} catch (error) {
    console.log(error)
    res.render('detalle',{
        error : true,
        mensaje : 'No se encuentra id seleccionado'
})
    
}
})

//Eliminar//
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
     const mascotaDB = await Mascotas.findByIdAndDelete({_id: id})

     if (mascotaDB) {
        res.json({
            estado: true,
            mensaje: 'eliminado!'
        })
        
     } else {
        res.json({
            estado: true,
            mensaje: 'fallo al eliminar!'
        })
        
     }
        
    } catch (error) {
        console.log(error)
        
    }
})

export default router;