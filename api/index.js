const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const verifyToken = require('./middleware/verifyToken');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

routes(app);

app.use('/api', verifyToken); // Adicione o middleware globalmente para todas as rotas que deseja proteger
app.use('/api', require('./routes'));

app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`));

module.exports = app;