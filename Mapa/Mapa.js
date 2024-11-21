/*arquivo de administração de todas as paginas com a função mapa*/
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

router.get("/", async (req, res) =>{
    res.render("mpa", {//pagina inicial do projeto mostra um mapa sem local selecionado
        lon: -1.474560,
        lat: -48.452322,
        lugar: 0
    });
})

router.get("/local/mapa/:id", async (req, res) =>{
    var id = req.params.id;//pega o identificador da barra de endereço
    dados = await db.selectId('localidade',id).then(async dados =>{
        if(dados != undefined){
            res.render("mpa",{
                lon: dados.longitude,
                lat: dados.latitude,
                lugar: dados.Nome
            })
        }
        else{
            res.redirect("/")//caso não haja nem um local com o id buscado, retornamos para a pagina inicial
        }
    })
});

//pagina para mostrar a posição do usuario
router.get("/myposition/:lon/:lat", async (req,res)=>{
    var longitude = req.params.lon;
    var latitude = req.params.lat;
    res.render("mpa", {
        lon: longitude,
        lat: latitude,
        lugar: "Você"
    })
})
router.get("/myposition/:lon/:lat/:id", async (req,res)=>{
    var longitude = req.params.lon;
    var latitude = req.params.lat;
    var id = req.params.id;//pega o identificador da barra de endereço
    dados = await db.selectId('localidade',id).then(async dados =>{
        if(dados != undefined){
           res.render("rota",{
                lon: dados.longitude,
                lat: dados.latitude,
                lugar: dados.Nome,
                mylon: longitude,
                mylat: latitude,
                myname: "Você"
            })
        }
        else{
            res.redirect("/")//caso não haja nem um local com o id buscado, retornamos para a pagina inicial
        }
    })
})
//**********Paginas DE Localização aproximada**********
router.get("/categorias/mapa/:nome", async (req, res)=>{
    var categoria= req.params.nome
    dados = await db.selectCategoria(categoria).then(async dados =>{
        if(dados != undefined){
            var cord = []
            dados.forEach(local => {
                cord.push([local.longitude, local.latitude])
            })
           res.render("multMap",{
                dados:cord,
                lugar:categoria
           })
        }
        else{
            res.redirect("/")//caso não haja nem um local com o id buscado, retornamos para a pagina inicial
        }
    })
})

//*******Rota com Localização Aproximada*****

router.get("/rota/:idobjetivo/:idfonte", async (req,res)=>{
    var idfonte = req.params.idfonte;
    var idobjetivo = req.params.idobjetivo;//pega o identificador da barra de endereço
    fonte = await db.selectId('localidade',idfonte).then(async fonte =>{
        if(fonte != undefined){
            objetivo = await db.selectId('localidade',idobjetivo).then(async objetivo =>{
                if(objetivo != undefined){
                   res.render("rota",{
                        lon: fonte.longitude,
                        lat: fonte.latitude,
                        lugar: dados.Nome,
                        mylon: objetivo.longitude,
                        mylat: objetivo.latitude,
                        myname: objetivo.Nome
                    })
                }
                else{
                    res.redirect("/")//caso não haja nem um local com o id buscado, retornamos para a pagina inicial
                }
            })
        }
        else{
            res.redirect("/")//caso não haja nem um local com o id buscado, retornamos para a pagina inicial
        }
    })
})


module.exports = router;

