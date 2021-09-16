const connection = require('../database')

class mascotaController{

    get(req, res){
        connection.query('select * from Mascota', (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    insert(req, res){
        const{nombre, peso, fecha_nacimiento} = req.body;
        connection.query('insert into Mascota (nombre, peso, fecha_nacimiento) values (?, ?, ?)', 
        [nombre, peso, fecha_nacimiento], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    get_id(req, res){
        const {id} = req.params;
        connection.query('select * from Mascota where id_mascota = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    get_animal_raza(req, res){
        const {id_raza} = req.params;
        connection.query('select * from Mascota where id_raza = ?',[id_raza], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    get_animal_cliente(req, res){
        const {id_cliente} = req.params;
        connection.query('select * from Mascota where id_cliente = ?',[id_cliente], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    get_animal_raza_cliente(req, res){
        const {id_raza, id_cliente} = req.params;
        connection.query('select * from Mascota where id_raza = ?, id_cliente = ?',
        [id_raza, id_cliente], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }

    update(req, res){
        const{nombre, peso, fecha_nacimiento} = req.body;
        connection.query('update Mascota set nombre = ?, peso = ?, fecha_nacimiento = ? where id_mascota = ?', 
        [nombre, peso, fecha_nacimiento], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        });
    }

    delete(req, res){
        const{id} = req.params;
        connection.query('delete Mascota where id_mascota = ?',[id], (err, rows)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
    }
}

exports.MascotaController = new mascotaController();