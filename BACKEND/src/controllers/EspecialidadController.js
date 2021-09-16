const connection = require('../database')

class especialidadController{

    get(req, res){
        connection.query('select * from Especialidad', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{nombre} = req.body;
        connection.query('insert into Especialidad (nombre) values (?)', [nombre], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Especialidad where id_especialidad = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    delete(req, res){
        const{id} = req.params;
        connection.query('delete Especialidad where id_especialidad = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }
}

exports.EspecialidadController = new especialidadController();