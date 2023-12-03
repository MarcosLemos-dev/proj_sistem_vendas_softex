import Clientes from '../models/clientes';

/*
observação essa classe ainda falta ser implementada, e ainda estdar e pesquisar mais para saber como usar ela dentro do projeto
*/

class ClientesService{
    
    private clientes: Array<Clientes> = [];

    public listaClientes(): Array<Clientes> {
        return this.clientes;
    }
    
    public criarClientes(clientes:any):void{
        const clientesN = new Clientes();
        
        this.clientes.push(clientesN)
    }


}

    export default new ClientesService();