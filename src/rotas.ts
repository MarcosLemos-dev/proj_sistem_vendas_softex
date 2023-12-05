import {
  Request,
  Response,
  Router,
} from 'express';

import CategoriasController from './controller/CategoriasController';
import FornecedoresController from './controller/FornecedoresController';

const router = Router();

 router.get('/teste', (req:Request, res:Response) => {
    return res.json({funcionario: 'paulo.......'});
 });


/*
 //esta parte é a rotas dos metodos CRUD para  tabela funcionarios
 router.get('/listarFuncionario', FuncionarioController.buscarFuncionarios);

 router.post('/cadastrarfuncionario', FuncionarioController.cadastrarFuncionario);

 router.put('/alterarFuncionario/:id', FuncionarioController.alterarFuncionario);

 router.delete('/deleteFuncionario/:id', FuncionarioController.deletarFuncionario);

 //esta parte é a rotas dos metodos CRUD para  tabela serviços
 router.get('/listarServico', ServicoController.listarServico);
 router.get('/listarServicoall', ServicoController.listarServicoall);

 router.post('/cadastrarServico', ServicoController.cadastrarServico);
*/
 //esta parte é a rotas dos metodos CRUD para  tabela Fornecedores
 router.get('/listarFornecedores', FornecedoresController.buscarFornecedores);
 router.post('/cadastrarFornecedores', FornecedoresController.cadastrarFornecedores);
 router.put('/alterarFornecedores/:id', FornecedoresController.alterarFornecedores);
 router.delete('/deletarFornecedores/:id', FornecedoresController.deletarFornecedores);

//esta parte é a rotas dos metodos CRUD para  tabela Categorias
router.get('/listarCategorias', CategoriasController.buscarCategorias);
router.post('/cadastrarCategorias', CategoriasController.cadastrarCategorias);
router.put('/alterarCategorias/:id', CategoriasController.alterarCategorias);
router.delete('/deletarCategorias/:id', CategoriasController.deletarCategorias);

export { router };