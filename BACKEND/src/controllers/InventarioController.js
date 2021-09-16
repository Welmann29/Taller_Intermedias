const connection = require('../database')

class inventarioController{

    get(req, res){
        connection.query('select * from Inventario', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{nombre, descripcion, cantidad, precio} = req.body;
        connection.query('insert into Inventario (nombre, descripcion, cantidad, precio) values (?, ?, ?, ?)', 
        [nombre, descripcion, cantidad, precio], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Inventario where id_inventario = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    delete(req, res){
        const{id} = req.params;
        connection.query('delete Inventario where id_inventario = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    update(req, res){
        const{id_inventario, nombre, descripcion, cantidad, precio}
        connection.query('update Inventario set nombre = ?, descripcion = ?, cantidad = ?, precio = ? where id_inventario = ?',
        [nombre, descripcion, cantidad, precio, id_inventario], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    sumar_stock(req, res){
        const{id_inventario, cantidad}
        connection.query('update Inventario set cantidad = cantidad + ? where id_inventario = ?', 
        [id_inventario, cantidad], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    restar_stock(req, res){
        const{id_inventario, cantidad}
        connection.query('update Inventario set cantidad = cantidad - ? where id_inventario = ?', 
        [cantidad, id_inventario], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }
}

exports.InventarioController = new inventarioController();