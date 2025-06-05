const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  cleanUp() {
    const defaultFields = {
      nome: '',
      email: '',
      password: '',
      password2: ''
    };

    for (const key in defaultFields) {
      if (!this.body[key] || typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      nome: this.body.nome,
      email: this.body.email,
      password: this.body.password,
      password2: this.body.password2
    };
  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email });
    if (this.user) this.errors.push('Usuário já existe.');
  }

  async register() {
    this.valida();

    if (this.body.password !== this.body.password2) {
      this.errors.push('As senhas não conferem.');
    }

    if (this.errors.length > 0) return;

    await this.userExists();
    if (this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    delete this.body.password2;

    this.user = await LoginModel.create(this.body);
  }

  async login() {
  this.validaLogin();
  if (this.errors.length > 0) return;

  this.user = await LoginModel.findOne({ email: this.body.email });
  if (!this.user) {
    this.errors.push('Usuário não existe');
    return;
  }

  const senhaCorreta = bcryptjs.compareSync(this.body.password, this.user.password);
  if (!senhaCorreta) {
    this.errors.push('Senha inválida');
    this.user = null;
  }
}

validaLogin() {
  this.cleanUp();

  if(!validator.isEmail(this.body.email)) {
    this.errors.push('E-mail inválido');
  }

  if (!this.body.password) {
    this.errors.push('Senha é obrigatória');
  }
}

  async edit(id) {
    if (typeof id !== 'string') return;

    this.valida();
    if (this.errors.length > 0) return;

    const user = await LoginModel.findById(id);
    if (!user) {
      this.errors.push('Usuário não encontrado.');
      return;
    }

    user.nome = this.body.nome;
    user.email = this.body.email;

    if (this.body.password.length >= 3 && this.body.password.length <= 50) {
      const salt = bcryptjs.genSaltSync();
      user.password = bcryptjs.hashSync(this.body.password, salt);
    }

    await user.save();
    this.user = user;
  }

  static async buscaPorId(id) {
    if (typeof id !== 'string') return null;
    return await LoginModel.findById(id);
  }

  static async buscaUsuarios() {
    return await LoginModel.find().sort({ nome: 1 });
  }

  static async delete(id) {
    if (typeof id !== 'string') return null;
    return await LoginModel.findOneAndDelete({ _id: id });
  }
}

module.exports = Login;
