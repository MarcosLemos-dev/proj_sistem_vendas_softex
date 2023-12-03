
/*
observação essa classe ainda falta ser implementada
*/

import Funcionario from '../models/funcionario';

class FuncionarioService{
    private funcionarios: Array<Funcionario> = [];

    public listaFuncionario(): Array<Funcionario> {
        return this.funcionarios;
    }
    
    public criarFuncionarios(funcionario:any):void{
        const funcionarioN = new Funcionario();
        funcionarioN.setNome(funcionario.nome);
        

        this.funcionarios.push(funcionarioN)
    }}

    export default new FuncionarioService();