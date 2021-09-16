const express = require('express');
const { MascotaController } = require('../controllers/MascotaController');
const router = express.Router();

router.get('/Mascota',MascotaController.get); //get(ruta, funcion)
router.delete('/Mascota/:id', MascotaController.delete);
router.update('/Mascota', MascotaController.update);
router.get('/Mascota/:id', MascotaController.get_id);
router.get('/Mascota/Raza/:id_raza', MascotaController.get_animal_raza);
router.get('/Mascota/:id_raza/:id_cliente', MascotaController.get_animal_raza_cliente);
router.get('/Mascota/Cliente/:id_cliente', MascotaController.get_animal_cliente);

router.post('/Mascota', MascotaController.insert)
module.exports = router