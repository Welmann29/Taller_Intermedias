const connection = require('../database')

class razaController{

    get(req, res){
        connection.query('select * from Raza', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{id_tipo, nombre} = req.body;
        connection.query('insert into Raza (id_tipo, nombre) values (? , ?)', [id_tipo, nombre], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Raza where id_raza = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    get_id_tipo(req, res){
        const {id} = req.params;
        connection.query('select * from Raza where id_tipo = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    delete(req, res){
        const{id} = req.params;
        connection.query('delete Raza where id_raza = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    delete_tipo(req, res){
        const{id} = req.params;
        connection.query('delete Raza where id_tipo = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }
}

exports.RazaController = new razaController();