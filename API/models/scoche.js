'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScocheSchema = Schema ({
    nombre: String,
    dni: {type: String, unique: true},
    matricula: String,
    modelo: String,
    marca:String,
    nacido: String,
    anosCarnet: String
})

module.exports = mongoose.model('Scoche', ScocheSchema)