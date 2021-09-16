const connection = require('../database')

class tipoAnimalController{

    get(req, res){
        connection.query('select * from tipo_animal', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{nombre} = req.body;
        connection.query('insert into tipo_animal (nombre) values (?)', [nombre], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from tipo_animal where id_tipo = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    delete(req, res){
        const{id} = req.params;
        connection.query('delete tipo_animal where id_tipo = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }
}

exports.TipoAnimalController = new tipoAnimalController();