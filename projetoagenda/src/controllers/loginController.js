const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if (req.session.user) return res.render('index');
  res.render('login');
};

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => res.redirect('/login/index'));
      return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(() => res.redirect('/login/index'));
  } catch (e) {
    console.error(e);
    res.render('404');
  }
};

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => res.redirect('/login/index'));
      return;
    }

    if (!login.user) {
      req.flash('errors', ['Usuário ou senha incorretos']);
      req.session.save(() => res.redirect('/login/index'));
      return;
    }

    req.flash('success', 'Você entrou no sistema.');
    req.session.user = {
      _id: login.user._id,
      nome: login.user.nome,
      email: login.user.email,
    };
    req.session.save(() => res.redirect('/'));
  } catch (e) {
    console.error(e);
    res.render('404');
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

exports.account = (req, res) => {
  if (!req.session.user) {
    req.flash('errors', 'Você precisa estar logado.');
    req.session.save(() => res.redirect('/login/index'));
    return;
  }
  res.render('account', { user: req.session.user });
};

exports.edit = async (req, res) => {
  try {
    if (!req.session.user) {
      req.flash('errors', 'Você precisa estar logado.');
      req.session.save(() => res.redirect('/login/index'));
      return;
    }
    
    const userId = req.session.user._id;
    const loginEdit = new Login(req.body);
    await loginEdit.edit(userId);

    if (loginEdit.errors.length > 0) {
      req.flash('errors', loginEdit.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Dados atualizados com sucesso.');
    req.session.save(() => res.redirect('/login/index'));
  } catch (e) {
    console.error(e);
    res.render('404');
  }
};
