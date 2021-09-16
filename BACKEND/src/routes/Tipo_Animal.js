const express = require('express');
const { TipoAnimalController } = require('../controllers/TipoAnimalController');
const router = express.Router();

router.get('/TipoAnimal',TipoAnimalController.get); //get(ruta, funcion)
router.delete('/TipoAnimal/:id', TipoAnimalController.delete);
router.get('/TipoAnimal/:id', TipoAnimalController.get_id);
router.post('/TipoAnimal', TipoAnimalController.insert)
module.exports = router