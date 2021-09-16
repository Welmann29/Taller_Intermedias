const express = require('express');
const { ConsultaController } = require('../controllers/ConsultaController');
const router = express.Router();

router.get('/Especialidad',ConsultaController.get); //get(ruta, funcion)
router.delete('/Especialidad/:id', ConsultaController.delete);
router.update('/Especialidad', ConsultaController.update);
router.get('/Especialidad/:id', ConsultaController.get_id);
router.post('/Especialidad', ConsultaController.insert)
module.exports = router