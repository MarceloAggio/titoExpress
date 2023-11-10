const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

// Importar o roteador
const statusRoutes = require('./routes/statusRoutes');
const tipoRoutes = require('./routes/tipoRoutes');
const usuarioRoute = require('./routes/usuarioRoutes');
const cadastroRoute = require('./routes/cadastroRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use(cors());

app.disable('x-powered-by');
app.set('port', port);

// Chamando o retador do app
statusRoutes(app);
tipoRoutes(app);
usuarioRoute(app);
cadastroRoute(app);



server.listen(3000, '192.168.56.1' || 'localhost', function (){
    console.log('Teste do servidor ' + process.pid + ' porta ' + port + ' Iniciada... ')
});

app.get('/', (req, res) => {
    res.send('Rota raiz do servidor backEnd');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stak);
});