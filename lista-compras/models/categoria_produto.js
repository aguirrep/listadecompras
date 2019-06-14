const mongoose = require('mongoose');
const produto = require('./produto');

const esquema = new mongoose.Schema({
    CategoriaProduto:{
        type: String,
        required:true,
        unique:true
    },
    produto: [produto]
});


const CategoriaProduto = mongoose.model('CategoriaProduto',esquema);
module.exports = CategoriaProduto;