const express = require('express');
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES
app.use(express.json()); //nos sirve para poder recibir datos de tipo json

//ROUTES se debe de agregar cada uno de los controllers
app.use(require('./routes/Tipo_Animal'))
app.use(require('./routes/Raza'))
app.use(require('./routes/Cliente'))
app.use(require('./routes/Consulta'))
app.use(require('./routes/Especialidad'))
app.use(require('./routes/Factura'))
app.use(require('./routes/Inventario'))
app.use(require('./routes/Mascota'))
app.use(require('./routes/Veterinario'))

//SERVER

app.listen(app.get('port'), ()=>{
    console.log("Servidor iniciado en puerto "+app.get('port'));
});