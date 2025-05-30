const Login = require('../models/LoginModel');
const bcryptjs = require('bcryptjs');

exports.account = (req, res) => {
  if (!req.session.user) {
    req.flash('errors', 'Você precisa estar logado.');
    req.session.save(() => res.redirect('/login/index'));
    return;
  }

  res.render('account', { user: req.session.user });
};

exports.update = async (req, res) => {
  try {
    const user = await Login.findById(req.session.user._id);
    if (!user) {
      req.flash('errors', 'Usuário não encontrado.');
      req.session.save(() => res.redirect('back'));
      return;
    }

    const { nome, email, password, password2 } = req.body;

    if (!nome || !email) {
      req.flash('errors', 'Nome e e-mail são obrigatórios.');
      req.session.save(() => res.redirect('back'));
      return;
    }

    if (password) {
      if (password !== password2) {
        req.flash('errors', 'As senhas não conferem.');
        req.session.save(() => res.redirect('back'));
        return;
      }
      const salt = bcryptjs.genSaltSync();
      user.password = bcryptjs.hashSync(password, salt);
    }

    user.nome = nome;
    user.email = email;

    await user.save();

    req.flash('success', 'Dados atualizados com sucesso.');
    req.session.user = user;
    req.session.save(() => res.redirect('/user/account'));
  } catch (e) {
    console.log(e);
    res.render('404');
  }
};
