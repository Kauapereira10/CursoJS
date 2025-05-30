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

    async login() {
    this.valida();
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
        return;
    }
}


    async register() {
        this.valida();
        // ✅ Verifica se as senhas são iguais
        if (this.body.password !== this.body.password2) {
        this.errors.push('As senhas não conferem.');
        }

        if(this.errors.length > 0 ) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        // Remove o campo de confirmação antes de salvar no banco
        delete this.body.password2;

        this.user = await LoginModel.create(this.body);

    }

    async userExists() {
            this.user = await LoginModel.findOne({ email: this.body.email });
            if (this.user) this.errors.push('Usuário já existe.');
        }   

    valida() {
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
        if(this.body.password.length < 3 || this.body.password.length > 50) {
        this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
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

}

module.exports = Login;