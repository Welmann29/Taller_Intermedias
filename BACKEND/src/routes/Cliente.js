const express = require('express');
const { ClienteController } = require('../controllers/ClienteController');
const router = express.Router();

router.get('/Cliente',ClienteController.get); //get(ruta, funcion)
router.delete('/Cliente/:id', ClienteController.delete);
router.put('/Cliente', ClienteController.update);
router.put('/Cliente/Animal', ClienteController.update_animal)
router.get('/Cliente/:id', ClienteController.get_id);
router.post('/Cliente', ClienteController.insert)
module.exports = router