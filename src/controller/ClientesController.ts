import {
  Request,
  Response,
} from 'express';

import { conexao } from '../bd/conexao';

/*
const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "hotel"
   });

*/

class clientesController{


    public buscarClientes(req: Request, res: Response){
        const consulta = "SELECT * FROM sistemavendas.clientes;";

    conexao.query(consulta, (erro,resultado) =>{
        if(erro){
            console.log(erro);
            res.status(404).json({'erro': erro});
            }else{
                res.status(200).json(resultado);            }
    });

    }
    public cadastrarClientes(req: Request, res: Response){
        const dados = req.body;
    const sql = "INSERT INTO sistemavendas.clientes SET ?";
    conexao.query(sql, dados, (erro, resultado) => {
        if(erro){
        console.log(erro)
        res.status(400).json({'erro': erro})
        }else{
        res.status(201).json(resultado)
        }
    });
    }
    public alterarClientes(req: Request, res: Response) {
    const id = req.params.id;
	const dados = req.body;
	const sql = "UPDATE  sistemavendas.clientes SET ? WHERE idcliente =?;";
	conexao.query(sql,[dados, id], (erro, resultado) => {
	if(erro){
	console.log(erro)
	res.status(404).json({'erro': erro})
	}else{
	res.status(200).json(resultado)
	}
});
    }
    public deletarClientes(req: Request, res: Response) {
        const id = req.params.id;
	
	const sql = "DELETE FROM  sistemavendas.clientes WHERE idcliente =?;";
	conexao.query(sql,id, (erro, resultado) => {
	if(erro){
	console.log(erro)
	res.status(404).json({'erro': erro})
	}else{
	res.status(200).json(resultado)
	}
});
        }

        
    
}

export default new clientesController();