const CategoriaProduto = require('../models/categoria_produto');

const controller = {
   recuperarTodos: (req,res)=> {
    CategoriaProduto
        .find()
        .exec()
        .then(
            produtos => res.json(produtos),
            erro => {
                console.logv(erro);
                res.status(500).json('Erro ao tentar carregar outros produtos');
            }

        );
    },
   

};

module.exports = controller;

