const connection = require('../database')

class facturaController{

    get(req, res){
        connection.query('select * from Factura', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{clave,serie, correlativo, total, nit, id_cliente} = req.body;
        connection.query('insert into Factura (clave_factura, serie, correlativo, total, nit, id_cliente) values (?, ?, ?, ?, ?, ?)', 
        [clave, serie, correlativo, total, nit, id_cliente], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Factura where clave_factura = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }


    delete(req, res){
        const{id} = req.params;
        connection.query('delete Factura where clave_factura = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    update(req, res){
        const{serie, correlativo, total, nit}
        connection.query('update Inventario set serie = ?, correlativo = ?, total = ?, nit = ? where clave_factura = ?',
        [serie, correlativo, total, nit], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert_detalle(req, res){
        const{clave_factura, id_inventario, cantidad, subtotal} = req.body;
        connection.query('insert into Factura (clave_factura, id_inventario, cantidad, subtotal) values (?, ?, ?, ?)', 
        [clave_factura, id_inventario, cantidad, subtotal], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_detalle(req, res){
        connection.query('select * from detalle_factura', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    get_detalle_factura(req, res){
        const {id_factura} = req.params;
        connection.query('select * from detalle_factura where id_factura = ?', [id_factura], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    get_detalle_factura_inventario(req, res){
        const {id_factura, id_inventario} = req.params;
        connection.query('select * from detalle_factura where id_factura = ? and id_inventario = ?', [id_factura, id_inventario], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    get_detalle_inventario(req, res){
        const {id_inventario} = req.params;
        connection.query('select * from detalle_factura where id_inventario = ?', [id_inventario], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    update_detalle(req, res){
        const{clave_factura, id_inventario, cantidad, subtotal}
        connection.query('update detalle_factura set  cantidad = ?, subtotal = ? where clave_factura = ? and id_inventario = ?',
        [clave_factura, id_inventario, cantidad, subtotal], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    delete_detalle(req, res){
        const{id} = req.params;
        connection.query('delete detalle_factura where clave_factura = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

}

exports.FacturaController = new facturaController();