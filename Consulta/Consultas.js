/*Arquivo de administrção de todas a paginas que controlam consultas no banco de dados*/
const express = require('express');
const app = express();
app.use(express.static('public'))
const router = express.Router();

//selecionadno o motor de html para o express exibir, ele basicamente pega uma rquivo html e torna legivel para o nosso servidor
app.set('view engine', 'ejs');

//conexão com as paginas ejs
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//exportar vinculo com banco de dados
const db = require("../bancoDeDados/db");
const { STRING } = require('mysql/lib/protocol/constants/types');


//***************8AREA DE CONSULTA****************

//pagina de pesquisa projeto mostra os endereços já registrados em ordem de cadastro e uam barra de pesquisa
router. get("/pesquisa", async (req, res) =>{
    dados = await db.selectLocais();
    res.render("pesquisa", {
        dados: dados
    });
})



//pagina de informações do local
router. get("/local/:id/", async (req, res) =>{//podemos acessar um local que ja sabemos o id simplemente digitando loca/ o id dele
    var id = req.params.id;//pega o identificador da barra de endereço
    dados = await db.selectId('localidade',id).then(async dados =>{//retorna a linha do identificador
        if(dados != undefined){
            let contatos = await db.selectContato(id);
            let filhos = await db.selectfilhos(id);
            const Andar = await db.selectId('andar', dados.Andar);
            const Tipo = await db.selectId('tipo', dados.Tipo);
            const Setor = await db.selectId('setor', dados.Setor);
            const Portao = await db.selectId('portao', dados.Portao);


            //essa condicional, diferencia a pagina renerizada por locais que não então dentro de predios, e localis que estão 
            //exemplo reitoria/gabinete da reitoria
            if(dados.Origem == 0){
                res.render("Local", {//renderização da pagina
                    //campos selecionados
                    nome: dados.Nome, 
                    origem: dados.Origem,
                    andar: Andar.Nome,
                    tipo: Tipo.Nome,
                    setor: Setor.Nome,
                    portao: Portao.Nome,
                    id: id,
                    contatos:contatos,
                    filhos:filhos
                });
            }
            else{
                const dadosOrigem = await db.selectId('localidade',dados.Origem)
            res.render("Local", {//renderização da pagina
                //campos selecionados
                nome: dados.Nome, 
                origem: dados.Origem,
                nomeorigem: dadosOrigem.Nome,
                andar: Andar.Nome,
                tipo: Tipo.Nome,
                setor: Setor.Nome,
                portao: Portao.Nome,
                id: id,
                contatos:contatos,
                filhos:filhos
            });
            }
        }
        else{
            res.redirect("/")//caso não haja nem um local com o id buscado, retornamos para a pagina inicial
        }
    });
})
//essa pagina pega uma string e pesquisa no campo nomes do banco de dados
router.post("/pesquisar", async (req, res) =>{
    if (req.body.nomeLocal != ""){//primeiro checamos se não é uma string vazia,
        const pesquisa = req.body.nomeLocal;
        const dados = await db.selectPesquisa(pesquisa)
        res.render("pesquisa", {
            dados:dados
        });
    }
    else{//caso esteja, retornamos um dicionario com todos os registros da tabela localidade
        dados = await db.selectLocais();
        res.render("pesquisa", {//pagina inicial do projeto mostra os endereços já registrados em ordem de cadastro
            dados: dados
        });
    }
});



//*******AREA DE INSERÇÂO********

//inserção das informações de locais sem origem (predios" Mirante, Reitoria, alditorio central")
router. get("/registro", async (req, res) =>{
    res.render("LocalRegistro", {
        //essa variavel demarca que a localidade não tem origem, ou seja se trata de um predio
        origem:0
    });
})

router. get("/registro/:id", async (req, res) =>{
    res.render("LocalRegistro", {
        //quando a variavel recebe um id denotamos que ela esta agragada a uma outra localidade, tendo assim uma origem
        origem: req.params.id
    });
})



//pagina de cdastro de local
router.post("/upload", async (req, res) =>{
    //informações das caixas de resposta
    var local = {
        nome: req.body.nome,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        origem: req.body.origem,
        andar: req.body.andar,
        tipo: req.body.tipo,
        setor: req.body.setor,
        portao: req.body.portao,
    }
    // caso o valor retornado seja 0 podemos concluir que este edifio não tem origem, ou seja não fica dentro de um predio
    if(req.body.Origem == 0){
        local.origem = null
    }
    //inserção das informações de locais sem origem (predios" Mirante, Reitoria, alditorio central")
        await db.insertLocais(local);
    res.redirect("/pesquisa")//então redirecionamos para a pagina de cadastro
})
router. get("/contato/:id", async (req, res) =>{
    res.render("ContatoRegistro", {
        //quando a variavel recebe um id denotamos que ela esta agragada a uma outra localidade, tendo assim uma origem
        idlocal: req.params.id
    });
})



//******ENCONTRAR LOCAL PROXIMO AO USUARIO*******
//essas paginas visão localizar o usuario encontando uma localidade perto a ele
router. get("/proximo", async (req, res) =>{
    dados = await db.selectLocais();
    res.render("proximo", {
        dados: dados
    });
})
router.post("/proxlmo", async (req, res) =>{
    if (req.body.nomeLocal != ""){//primeiro checamos se não é uma string vazia,
        const pesquisa = req.body.nomeLocal;
        const dados = await db.selectPesquisa(pesquisa)
        res.render("proximo", {
            dados:dados
        });
    }
    else{//caso esteja, retornamos um dicionario com todos os registros da tabela localidade
        dados = await db.selectLocais();
        res.render("proximo", {//pagina inicial do projeto mostra os endereços já registrados em ordem de cadastro
            dados: dados
        });
    }
});

//essa cria uma rota a partir de um local proximo do usuario
router. get("/proximo/:id", async (req, res) =>{
    dados = await db.selectLocais();
    res.render("proximoRota", {
        dados: dados,
        idlocal: req.params.id
    });
})

router.post("/proxlmo/:id", async (req, res) =>{
    if (req.body.nomeLocal != ""){//primeiro checamos se não é uma string vazia,
        const pesquisa = req.body.nomeLocal;
        const dados = await db.selectPesquisa(pesquisa)
        res.render("proximoRota", {
            dados:dados,
            idlocal: req.params.id
        });
    }
    else{//caso esteja, retornamos um dicionario com todos os registros da tabela localidade
        dados = await db.selectLocais();
        res.render("proximo", {//pagina inicial do projeto mostra os endereços já registrados em ordem de cadastro
            dados: dados
        });
    }
});

router.post("/contatoupload", async (req, res) =>{
    var contato ={
        idlocal: Number(req.body.idlocal),
        telefone:req.body.telefone,
        site:req.body.site,
        email:req.body.email,
        twitter:req.body.twitter,
        instagran:req.body.instagran,
        horario: String(req.body.inicio) + " a " + String(req.body.fim)
    }

    await db.insertContato(contato);
    res.redirect("/local/" + contato.idlocal)
})



module.exports = router;