const express = require('express');
const app = express();
const rotas = require('./routes/route')

// const adminRoutes = express.Router();
// const clienteRoutes = express.Router();

// clienteRoutes.get('/msg/:name', (req, res) => {
//     res.send( 'Hello ' + req.params.name);
// });

// adminRoutes.get('/', (req, res) => {
//     res.send('Hello wolrd admin');
// });

// adminRoutes.post('/', (req, res) => {
//     res.send('post request');
// });

app.use(express.json());
app.use('/', rotas);
//app.use('/admin', adminRoutes);

app.listen(3000);