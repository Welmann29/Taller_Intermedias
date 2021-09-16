const connection = require('../database')

class consultaController{

    get(req, res){
        connection.query('select * from Consulta', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{fecha_programada, descripcion} = req.body;
        connection.query('insert into Consulta (fecha_programada, descripcion) values (?, ?)', 
        [fecha_programada, descripcion], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Consulta where id_consulta = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    update(req, res){
        const{fecha_programada, descripcion, id_consulta} = req.body;
        connection.query('update Consulta set fecha_programada = ? , descripcion = ? where id_consulta = ?', 
        [fecha_programada, descripcion, id_consulta], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    delete(req, res){
        const{id} = req.params;
        connection.query('delete Consulta where id_consulta = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }
}

exports.ConsultaController = new consultaController();