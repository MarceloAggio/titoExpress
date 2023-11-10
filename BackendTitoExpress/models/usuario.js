const db = require('../config/config');

const Usuario = {};

Usuario.create = (usuario, result) => {
    const sql = `INSERT INTO usuario(email, senha, hash, idStatus, idTipo) VALUES (?, ?, ?, ?, ?)`; ;
    db.query(
        sql,
        [
            usuario.email,
            usuario.senha,
            usuario.hash,
            usuario.idStatus,
            usuario.idTipo
        ],
        (err, res) => {
            if (err) {
                console.log('Erro no banco de dados!', err);
                result(err, null); ''
            } else {
                result(null, res.insertId);
            }
        }
    );
}

module.exports = Usuario;
