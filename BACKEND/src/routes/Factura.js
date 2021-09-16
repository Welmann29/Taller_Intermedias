const express = require('express');
const { FacturaController } = require('../controllers/FacturaController');
const router = express.Router();

router.get('/Factura',FacturaController.get); //get(ruta, funcion)
router.delete('/Factura/:id', FacturaController.delete);
router.update('/Factura/:id', FacturaController.update);
router.get('/Factura/:id', FacturaController.get_id);
router.post('/Factura', FacturaController.insert);

router.get('/Factura', FacturaController.get_detalle);
router.post('/DETALLE', FacturaController.insert_detalle);
router.get('/DETALLE/:id_factura/:id_inventario', FacturaController.get_detalle_factura_inventario);
router.get('/DETALLE/FACTURA/:id_factura', FacturaController.get_detalle_factura)
router.get('/DETALLE/Inventario/:id_inventario', FacturaController.get_detalle_inventario)
router.update('/DETALLE', FacturaController.update_detalle);
router.delete('/DETALLE', FacturaController.delete_detalle);
module.exports = router