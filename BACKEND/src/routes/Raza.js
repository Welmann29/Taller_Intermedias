const express = require('express');
const { RazaController } = require('../controllers/RazaController');
const router = express.Router();

router.get('/Raza',RazaController.get); //get(ruta, funcion)
router.delete('/Raza/:id', RazaController.delete);
router.get('/Raza/Tipo/:id', RazaController.get_id_tipo);
router.delete('/Raza/Tipo/:id', RazaController.get_id_tipo);
router.get('/Raza/:id', RazaController.get_id);
router.post('/Raza', RazaController.insert)
module.exports = router