class Home {
    async cria(dados) {
        return await HomeModel.create(dados);
    }
}

module.exports = Home;
