const db = require('../config/config');

const Cadastro = {};

Cadastro.create = (cadastro, result) => {
    const sql = `INSERT INTO cadastro(nomeRazao, socialFantasia, dataNascimento, idUsuario) VALUES (?, ?, ?, ?)`; ;
    db.query(
        sql,
        [
            cadastro.nomeRazao,
            cadastro.socialFantasia,
            cadastro.dataNascimento,
            cadastro.idUsuario
        ],
        (err, res) => {
            if (err) {
                console.log('Erro no banco de dados!', err);
                result(err, null);
            }else{
                result(null, res.insertId);
            }
        }
    )
}
module.exports = Cadastro;