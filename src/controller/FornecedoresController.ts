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
  
  
      public buscarFornecedores(req: Request, res: Response){
          const consulta = "SELECT * FROM sistemavendas.fornecedores;";
  
      conexao.query(consulta, (erro,resultado) =>{
          if(erro){
              console.log(erro);
              res.status(404).json({'erro': erro});
              }else{
                  res.status(200).json(resultado);            }
      });
  
      }
      public cadastrarFornecedores(req: Request, res: Response){
          const dados = req.body;
      const sql = "INSERT INTO sistemavendas.fornecedores SET ?";
      conexao.query(sql, dados, (erro, resultado) => {
          if(erro){
          console.log(erro)
          res.status(400).json({'erro': erro})
          }else{
          res.status(201).json(resultado)
          }
      });
      }
      public alterarFornecedores(req: Request, res: Response) {
      const id = req.params.id;
      const dados = req.body;
      const sql = "UPDATE sistemavendas.fornecedores  SET ? WHERE CodigoDoFornecedor =? ;";
      conexao.query(sql,[dados, id], (erro, resultado) => {
      if(erro){
      console.log(erro)
      res.status(404).json({'erro': erro})
      }else{
      res.status(200).json(resultado)
      }
  });
      }
      public  deletarFornecedores(req: Request, res: Response) {
          const id = req.params.id;
      
      const sql = "DELETE FROM  sistemavendas.fornecedores WHERE CodigoDoFornecedor =?;";
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