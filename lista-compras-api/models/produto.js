const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    descricao:{
        type: String,
        required:true
    },
    unidadeMedida:String
});


module.exports = esquema;