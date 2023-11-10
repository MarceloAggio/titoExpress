const statusController = require('../controllers/statusController');

module.exports = (app) => {

    app.post('/api/status/create', statusController.register);

}

// GET -> Obter Dados
// POST -> Gravas dados
// PUT -> Atualizar dados
// DELETE -> Delete dados