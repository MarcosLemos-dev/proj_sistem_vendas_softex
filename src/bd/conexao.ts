import express, { json } from 'express';
import mysql from 'mysql2';

export const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "sistemavendas"
   });

const app = express();

app.use(json());

app.get('/', (req, res) => {
    res.send('helo world');

})

app.listen(3333, () =>{
    console.log('funcionou');
})



/*
// recuperando os dados do banco de dados 
app.get('/funcionario' , (req, res) =>{

    
    const consulta = "SELECT * FROM `hotel`.`funcionario`;";

    conexao.query(consulta, (erro,resultado) =>{
        if(erro){
            console.log(erro);
            res.status(404).json({'erro': erro});
            }else{
                res.status(200).json(resultado);            }
    });


});
//inserindo dados usando o post no isomnia
app.post('/casdatrar', (req, res) =>{
    const dados = req.body;
    const sql = "INSERT INTO hotel.funcionario SET ?";
    conexao.query(sql, dados, (erro, resultado) => {
        if(erro){
        console.log(erro)
        res.status(400).json({'erro': erro})
        }else{
        res.status(201).json(resultado)
        }
    });
      
    
    });
//SELECT POR ID (CHAVE PRIMÁRIA)
    app.get('/funcionario/:id', (req, res) => {
        const id = req.params.id
        const sql = "SELECT * FROM hotel.funcionario WHERE idfuncionario =?;";
        conexao.query(sql,id, (erro, resultado) => {
        if(erro){
        console.log(erro)
        res.status(404).json({'erro': erro})
        }else{
        res.status(200).json(resultado)
        }
    });
    
    });


// alterar dados 
app.put('/alterar/:id', (req, res) => {
	const id = req.params.id;
	const dados = req.body;
	const sql = "UPDATE  funcionario SET ? WHERE idfuncionario =?;";
	conexao.query(sql,[dados, id], (erro, resultado) => {
	if(erro){
	console.log(erro)
	res.status(404).json({'erro': erro})
	}else{
	res.status(200).json(resultado)
	}
});

});


//DELETE 

// deletar dados 
app.delete('/excluir/:id', (req, res) => {
	const id = req.params.id;
	
	const sql = "DELETE FROM  hotel.funcionario WHERE idfuncionario =?;";
	conexao.query(sql,id, (erro, resultado) => {
	if(erro){
	console.log(erro)
	res.status(404).json({'erro': erro})
	}else{
	res.status(200).json(resultado)
	}
});

});

//recuperando os dados da tabela chamado
app.get('/chamados', (req, res) => {
    const consulta = "select idservicos, descricao, local, dataAbertura, dataFechamento, status from hotel.servicos";
    conexao.query(consulta, (erro, resultado) => {
        if(erro){
        console.log(erro)
        res.status(404).json({'erro': erro})
        }else{
        res.status(200).json(resultado)
        }
    });


});

//inserindo dados usando o post no isomnia da tabela chamados
app.post('/cadastrarchamados', (req, res) =>{
    const dados = req.body;
    const sql = "INSERT INTO hotel.servicos SET ?";
    conexao.query(sql, dados, (erro, resultado) => {
        if(erro){
        console.log(erro)
        res.status(400).json({'erro': erro})
        }else{
        res.status(201).json(resultado)
        }
    });
});
//SELECT POR ID (CHAVE PRIMÁRIA)
app.get('/chamado/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM hotel.servicos WHERE idservicos =?;";
    conexao.query(sql,id, (erro, resultado) => {
    if(erro){
    console.log(erro)
    res.status(404).json({'erro': erro})
    }else{
    res.status(200).json(resultado)
    }
});

});

//recuperando os dados da  tabela chamados(servicos) e da tabela funcionario
app.get('/funcionariochamado', (req, res) => {
  

    const sql = "SELECT `funcionario`.`nome` , `servicos`.`descricao`  FROM `hotel`.`funcionario`  INNER JOIN `hotel`.`servicos`  ON `idfuncionario`=`idservicos`;";
   
    conexao.query(sql, (erro, resultado) => {
    if(erro){
    console.log(erro)
    res.status(404).json({'erro': erro})
    }else{
    res.status(200).json(resultado)
    }
});

});

//SELECT usando o like
app.get('/funcionarionome/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT nome, cargo FROM hotel.funcionario WHERE nome LIKE  ? order by nome asc;";
    conexao.query(sql,id, (erro, resultado) => {
    if(erro){
    console.log(erro)
    res.status(404).json({'erro': erro})
    }else{
    res.status(200).json(resultado)
    }
});

});

//SELECT usando o order by 
app.get('/funcionarioOrdemAlfabetica', (req, res) => {
   
    const sql = "SELECT `funcionario`.`nome` , `servicos`.`descricao`  FROM `hotel`.`funcionario`  INNER JOIN `hotel`.`servicos`  ON `idfuncionario`=`idservicos` order by hotel.funcionario.nome;";
    conexao.query(sql,(erro, resultado) => {
    if(erro){
    console.log(erro)
    res.status(404).json({'erro': erro})
    }else{
    res.status(200).json(resultado)
    }
});

});
*/

