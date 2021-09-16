const connection = require('../database')

class veterinarioController{

    get(req, res){
        connection.query('select * from Veterinario', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{nombres, apellidos, numero_colegiado, dpi, inicio_labores, activo, fin_labores, id_encargado, id_especialidad} = req.body;
        const values = 'nombres, apellidos, numero_colegiado, dpi, inicio_labores, activo, fin_labores, id_encargado, id_especialidad'
        connection.query(`insert into Veterinario (${values}) values (?, ?, ?, ?, ?, ?)`, 
        [nombres, apellidos, numero_colegiado, dpi, inicio_labores, activo, fin_labores, id_encargado, id_especialidad], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Veterinario where id_veterinario = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }


    delete(req, res){
        const{id} = req.params;
        connection.query('delete Veterinario where id_veterinario = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    update(req, res){
        const{nombres, apellidos, numero_colegiado, dpi, inicio_labores, activo, fin_labores, id_encargado, id_especialidad} = req.body;
        let value_update = 'nombres = ?, apellidos = ?, numero_colegiado = ?, ';
        value_update+='inicio_labores = ? , activo = ? , fin_labores = ? , id_encargado = ?, id_especialidad = ?';
        connection.query(`update Veterinario set ${value_update}  where id_veterinario = ?`,
        [nombres, apellidos, numero_colegiado, dpi, inicio_labores, activo, fin_labores, id_encargado, id_especialidad], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

   

}

exports.VeterinarioController = new veterinarioController();