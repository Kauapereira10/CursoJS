const Contato = require('../models/contatoModel');

exports.index = async (req, res) => {
    const user = req.session.user;

    if(!user) {
        return res.render('index', { contatos: [], user: null });
    }

    const contatos = await Contato.buscaContatos(user._id);
    res.render('index', { contatos, user });
};
