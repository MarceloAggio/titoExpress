const Status = require('../models/status');

module.exports = {
    register(req, res){
        const status = req.body;

        Status.create(status,({err, data}) => {
            if (err) {
                return res.status(501).json({
                    sucess: false,
                    Message: 'Erro ao criar o status no banco!',
                    error: err
                });
            }

            return res.status(201).json({
                sucess: true,
                message: 'Status cadastrado com sucesso no banco!',
                data: data
        });
    } )     
}    
}
