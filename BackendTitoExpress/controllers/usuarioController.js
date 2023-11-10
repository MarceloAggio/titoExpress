const Usuario = require('../models/usuario');

module.exports = {
    register(req, res) {
        const usuario = req.body;

        Usuario.create(usuario, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Erro ao criar o Usuario no banco!',
                    error: err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Usuario cadastrado com sucesso no banco!',
                    data: data
                });
            }
        });
    }
}
