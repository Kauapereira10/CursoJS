require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


// ✅ Conexão atualizada (sem opções obsoletas)
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log('Erro na conexão com MongoDB:', e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// Middlewares essenciais
app.use(helmet()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));


// Sessões armazenadas no MongoDB
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true,
    // secure: true, // Descomente em produção com HTTPS
  }
});
app.use(sessionOptions);
app.use(flash());


// Configuração de views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// CSRF Protection
app.use(csrf());

// Middlewares próprios
app.use(checkCsrfError);
app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(routes);

// Inicialização do servidor
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
