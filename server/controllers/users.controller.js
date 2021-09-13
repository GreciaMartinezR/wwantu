const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require('../config/jwt.config');
 

module.exports.registro = (req, res) => {
    Users.findOne({ userEmail: req.body.userEmail })
        .then(resp => {
            if (resp) {
                res.json({ error: true, mensaje: "El correo electrónico ya está registrado" });
            } else {
                Users.create(req.body)
                    .then(r => res.json({ data: r }))
                    .catch(error => res.json({ error: error, mensaje: "Ocurrió un error" }));
            }
        })
};

module.exports.login = (req, res) => {
    Users.findOne({ userEmail: req.body.userEmail })
        .then(resp => {
            if (resp == null) {
                res.json({ error: true, mensaje: "Usuario no existe" });
            } else {
                bcrypt.compare(req.body.userPassword, resp.userPassword)
                    .then(isValid => {
                        if (isValid) {
                            const logguedUser = {
                                _id: resp._id,
                                userName: resp.userName,
                                userEmail: resp.userEmail,
                            };
                            const newToken = jwt.sign(logguedUser, secret);
                            res.cookie("usertoken", newToken, secret, {
                                httpOnly: true
                            }).json({ msg: "success!", data: logguedUser });
                        } else {
                            res.json({ error: true, mensaje: "Contraseña no valida" });
                        }
                    })
                    .catch(error => res.json({ error: error, mensaje: "Usuario o contraseña no válidos" }))
            }
        })
        .catch(error => res.json({ error: error, mensaje: "Usuario o contraseña no válidos" }))
}