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

exports.editIndex = async function (req, res) {
  try {
    if (!req.params.id) return res.render('404');

    const user = await Login.buscaPorId(req.params.id);
    if (!user) return res.render('404');

    res.render('user-edit', { user });
  } catch (error) {
    console.log(error);
    res.render('404');
  }
};


exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const loginInstance = new Login(req.body);

    // Busca o usuário no banco
    const user = await Login.buscaPorId(id);
    if (!user) {
      req.flash('errors', 'Usuário não encontrado.');
      return res.redirect('/account');
    }

    // Verifica se os dados enviados são iguais aos dados atuais
    const dadosIguais =
      user.nome === req.body.nome &&
      user.email === req.body.email &&
      (!req.body.password || req.body.password.trim() === '');

    if (dadosIguais) {
      req.flash('success', 'Nenhuma alteração foi feita.');
      return res.redirect(`/user/edit/${id}`);
    }

    // Executa o método de edição
    await loginInstance.edit(id);

    // Se ocorreram erros na validação ou edição, retorna para o formulário
    if (loginInstance.errors.length > 0) {
      req.flash('errors', loginInstance.errors);
      return res.redirect(`/user/edit/${id}`);
    }

    req.flash('success', 'Dados atualizados com sucesso!');
    return res.redirect(`/user/edit/${id}`);

  } catch (error) {
    console.error('Erro na atualização do usuário:', error);
    req.flash('errors', 'Ocorreu um erro inesperado ao atualizar os dados.');
    return res.redirect('/404');
  }
};
