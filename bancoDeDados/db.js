//arquivo de conexão com o banco de dados e suas funções
require('dotenv').config()

// criação de uma conexão
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise")
    const connection = mysql.createConnection(process.env.DATABASE_URL/*{
        host: 'localhost',
        user: 'root',
        database: 'localizaufpa',
        password: ''
        
    }*/)
    console.log("conectou")
    global.connection = connection;
    return connection;

}
//FUNÇÕES DE PESQUISA
//seleciona certo numero de localidades
async function selectinicial(){
    const con = await connect();
    const [locais] = await con.query('select * from localidade where id =3  or id = 6 or id = 7 or id = 10 or id = 15 or id = 26;')
    return await locais;
}
//menu de pesquisa, seleciona id e nome de toda a tabela
async function selectLocais(){
    const con = await connect();
    const [locais] = await con.query('SELECT Id, Nome FROM localidade;')
    return await locais;
}
//função que retorna todasas informações da localidade, usada para montar a pagina dela, e retornar os valores das tabela auxiliares
async function selectId(tabela, valor){
    const con = await connect();
    const sql = 'Select  * FROM ' + tabela + ' where Id = ?;';
    const values = [valor];
    const [locais] = await con.query(sql, values);
    return await locais[0];
}
//função que retornara os valores semelhantes a string pesquisada
async function selectPesquisa( name){
    const con = await connect();
    const sql = 'SELECT Id, Nome FROM localidade WHERE Nome Like ?'//ulizamos o operador like para selecionar nomes que comecem o com a string procurada
    const [locais] = await con.query(sql, '%' + name + '%') //os sinais de % marcam as partes que podem variar do nome, no caso o começo e o meio
    return await locais;
}

//Encontrar os contatos da localidade
async function selectContato(IdLocal){
    const con = await connect();
    const sql = 'SELECT * FROM contato WHERE IdLocal = ?;';
    const values = [IdLocal];
    const [contatos] = await con.query(sql, values);
    return await contatos;
}
//encontrar localidades por categoria
async function selectCategoria(categoria){
    const conn = await connect();
    //selecionando o id da categoria
    var sql = 'SELECT id FROM tipo where Nome like ?'
    var values = [categoria]
    var [tipo] = await conn.query(sql, values)
    //selecionado todas as localidades da categoria

    sql = 'SELECT latitude, longitude From localidade where Tipo = ?'
    values = [tipo[0].id]
    var [result] = await conn.query(sql, values)
    return await result;  
}
//encontrar localidades agregadas
async function selectfilhos(IdLocal){
    const con = await connect();
    const sql = 'select * from localidade where Origem = ?;';
    const values = [IdLocal];
    const [filhos] = await con.query(sql, values);
    return await filhos;
}


//FUNÇÕES DE INSERÇÃO
//função de inserção na tabela localidade
async function insertLocais(local){
    const con = await connect();
    const sql = 'INSERT INTO localidade(Nome, longitude, latitude,Origem , Andar, Tipo, Setor, Portao) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
    const values = [local.nome, local.longitude, local.latitude, local.origem, local.andar, local.tipo, local.setor, local.portao]
    await con.query(sql, values)
}
 async function insertContato(contato){
    const con = await connect();
    const sql = 'INSERT INTO contato(IdLocal, Telefone, Site, Instagran, Twitter, Horario, email) VALUES( ?, ?, ?, ?, ?, ?, ?)'
    const values = [contato.idlocal, contato.telefone, contato.site, contato.instagran, contato.twitter, contato.horario, contato.email,]
    await con.query(sql, values)
 }
 //FUNÇÕES DE ALTERAÇÃO DO ESTADO DA TABELA
 async function updateLocal(coluna, valor, id){
    const con = await connect();
    const sql = 'UPDATE localidade SET ? = ? WHERE id = ?;'
    const values = [coluna, valor, id]
    await con.query(sql, values)
 }


module.exports={selectinicial, selectLocais, selectId, selectPesquisa, selectContato, selectCategoria, selectfilhos, insertLocais, insertContato, updateLocal}