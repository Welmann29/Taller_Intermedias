const express = require('express');
const { EspecialidadController } = require('../controllers/EspecialidadController');
const router = express.Router();

router.get('/Especialidad',EspecialidadController.get); //get(ruta, funcion)
router.delete('/Especialidad/:id', EspecialidadController.delete);
router.get('/Especialidad/:id', EspecialidadController.get_id);
router.post('/Especialidad', EspecialidadController.insert)
module.exports = router