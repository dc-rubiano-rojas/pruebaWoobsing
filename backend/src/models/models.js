const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersModel = new Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: Number, required: true },
    direccion: { type: String, required: true },
});

module.exports = mongoose.model('usersModel', usersModel);