const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, default: "" },
  email: { type: String, default: "" },
  telefone: { type: String, default: "" },
  criadoEm: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', required: true }
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function (userId) {
  this.valida();

  if (this.errors.length > 0) return;

  this.body.user = userId;

  this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function () {
  this.cleanUp();

  if (!this.body.nome) this.errors.push("Nome é um campo obrigatório.");

  if (this.body.email && !validator.isEmail(this.body.email)) {
    this.errors.push("E-mail inválido.");
  }

  if (!this.body.email && !this.body.telefone) {
    this.errors.push(
      "Pelo menos um contato precisa ser preenchido: e-mail ou telefone."
    );
  }
};

Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== "string") {
      this.body[key] = "";
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.prototype.edit = async function (id) {
  if (typeof id !== "string") return;

  this.valida();

  if (this.errors.length > 0) return;

  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {
    new: true,
  });
};

// Métodos estáticos
Contato.buscaPorId = async function (id, userId) {
  if (typeof id !== "string") return null;
  return await ContatoModel.findOne({ _id: id, user: userId });
};

Contato.buscaContatos = async function (userId) {
  return await ContatoModel.find({ user: userId }).sort({ criadoEm: -1 });
};

Contato.delete = async function (id, userId) {
  if (typeof id !== "string") return null;
  return await ContatoModel.findOneAndDelete({ _id: id, user: userId });
};

module.exports = Contato;
