const express = require('express');
const { InventarioController } = require('../controllers/InventarioController');
const router = express.Router();

router.get('/Inventario',InventarioController.get); //get(ruta, funcion)
router.delete('/Inventario/:id', InventarioController.delete);
router.update('/Inventario/:id', InventarioController.update);
router.get('/Inventario/:id', InventarioController.get_id);
router.post('/Inventario', InventarioController.insert)
router.update('/Inventario/Restar', InventarioController.restar_stock)
router.update('/Inventario/Sumar', InventarioController.sumar_stock)

module.exports = router