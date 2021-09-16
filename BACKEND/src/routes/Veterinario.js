const express = require('express');
const { VeterinarioController } = require('../controllers/VeterinarioController');
const router = express.Router();

router.get('/Factura',VeterinarioController.get); //get(ruta, funcion)
router.delete('/Factura/:id', VeterinarioController.delete);
router.update('/Factura/:id', VeterinarioController.update);
router.get('/Factura/:id', VeterinarioController.get_id);
router.post('/Factura', VeterinarioController.insert);
module.exports = router