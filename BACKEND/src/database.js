const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Marroquin1',
    database: 'Clinica'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Base de Datos conectada");
    }
});

module.exports = connection;