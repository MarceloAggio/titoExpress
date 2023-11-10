const Tipo = require('../models/tipo');

module.exports = {
    register(req, res) {
        const tipo = req.body;

        Tipo.create(tipo, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Erro ao criar o Tipo no banco!',
                    error: err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Tipo cadastrado com sucesso no banco!',
                    data: data
                });
            }
        });
    }
}
