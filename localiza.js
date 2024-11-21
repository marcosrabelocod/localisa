/*este é o arquivo principal. que cuidad da interação da pagina com o banco de dados e como elas se dispõem
os arquivos de configuração do mapa não rodam com o express e o banco de dados, por isso eles ficam em um arquivo a parte o webmap.js*/
const express = require('express');
const app = express();
app.use(express.static('public'))

//selecionadno o motor de html para o express exibir, ele basicamente pega uma rquivo html e torna legivel para o nosso servidor
app.set('view engine', 'ejs');

//conexão com as paginas ejs
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//importar as divisões do projeto em mvc
const consulta = require("./Consulta/Consultas")
const mapa = require("./Mapa/Mapa")

//exportar vinculo com banco de dados
const db = require("./bancoDeDados/db");

//paginas relacionadas ao mapa
app.use("/", mapa);

//paginas relacionadas a consultas do cliente ao banco de dados
app.use("/", consulta);

app.listen(8000, () => {//informando porta de conexão
    console.log(" servidor na porta 8000");
});