import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//Variaveis de ambiente
dotenv.config();

//inicializando servidor
const server = express();

//Configurando nosso template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configurado pasta pública e arquivos estáticos
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

//Página de não encontrado
server.use((req, res)=>{
    res.send('Página não encontrada.')
});



server.listen(3000);