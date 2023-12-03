import {
  Request,
  Response,
  Router,
} from 'express';

import ClientesController from './controller/ClientesController';

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
 //esta parte é a rotas dos metodos CRUD para  tabela clientes
 router.get('/listarClientes', ClientesController.buscarClientes);
 router.post('/cadastrarClientes', ClientesController.cadastrarClientes);

export { router };