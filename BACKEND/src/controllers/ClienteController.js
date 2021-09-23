const connection = require('../database')

class clienteController{

    get(req, res){
        connection.query('select * from Cliente', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{dpi, nombres, apellidos, sexo, fecha_nacimiento, mascota_preferida} = req.body;
        connection.query('insert into Cliente (dpi, nombres, apellidos, sexo, fecha_nacimiento, mascota_preferida) values (?, ?, ?, ?, ?, ?)', 
        [dpi, nombres, apellidos, sexo, fecha_nacimiento, mascota_preferida], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Cliente where id_cliente = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    update(req, res){
        const{dpi, nombres, apellidos, sexo, fecha_nacimiento, mascota_preferida} = req.body;
        connection.query('update Cliente set nombres = ?, apellidos = ?,sexo = ?,fecha_nacimiento = ? , mascota_preferida = ? where dpi = ?', 
        [nombres, apellidos, sexo, fecha_nacimiento, mascota_preferida, dpi], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    update_animal(req, res){
        const{mascota_preferida, id_cliente} = req;
        connection.query('update Cliente set mascota_preferida = ? where id_cliente = ?', 
        [mascota_preferida, id_cliente], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    delete(req, res){
        const{id} = req.params;
        connection.query('delete from Cliente where dpi = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }
}

exports.ClienteController = new clienteController();