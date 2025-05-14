const express = require('express');
const app = express();

//         Criar   ler   atualizar apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
        <form action ="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Envíar</button> 
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log('Recebi o formulário');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar eem contato com AGENTE!');
})