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
/*
observação essa classe ainda falta ser implementada
*/

class FuncionarioController{


    public buscarFuncionarios(req: Request, res: Response){
        const consulta = "SELECT * FROM `sistemavendas`.`clientes`;";

    conexao.query(consulta, (erro,resultado) =>{
        if(erro){
            console.log(erro);
            res.status(404).json({'erro': erro});
            }else{
                res.status(200).json(resultado);            }
    });

    }
    public cadastrarFuncionario(req: Request, res: Response){
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
    }
    public alterarFuncionario(req: Request, res: Response) {
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
    }
    public deletarFuncionario(req: Request, res: Response) {
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
        }

        
    
}
/*
observação essa classe ainda falta ser implementada
*/

export default new FuncionarioController();