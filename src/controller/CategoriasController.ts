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
    
    class CategoriasController{
    
    
        public buscarCategorias(req: Request, res: Response){
            const consulta = "SELECT * FROM sistemavendas.categorias;";
    
        conexao.query(consulta, (erro,resultado) =>{
            if(erro){
                console.log(erro);
                res.status(404).json({'erro': erro});
                }else{
                    res.status(200).json(resultado);            }
        });
    
        }
        public cadastrarCategorias(req: Request, res: Response){
            const dados = req.body;
        const sql = "INSERT INTO sistemavendas.categorias SET ?";
        conexao.query(sql, dados, (erro, resultado) => {
            if(erro){
            console.log(erro)
            res.status(400).json({'erro': erro})
            }else{
            res.status(201).json(resultado)
            }
        });
        }
        public alterarCategorias(req: Request, res: Response) {
        const id = req.params.id;
        const dados = req.body;
        const sql = "UPDATE sistemavendas.categorias  SET ? WHERE CodigoDaCategoria =? ;";
        conexao.query(sql,[dados, id], (erro, resultado) => {
        if(erro){
        console.log(erro)
        res.status(404).json({'erro': erro})
        }else{
        res.status(200).json(resultado)
        }
    });
        }
        public  deletarCategorias(req: Request, res: Response) {
            const id = req.params.id;
        
        const sql = "DELETE FROM  sistemavendas.categorias WHERE CodigoDaCategoria =?;";
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
    
    export default new CategoriasController();