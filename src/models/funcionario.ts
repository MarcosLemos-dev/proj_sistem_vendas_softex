
/*
observação essa classe ainda falta ser implementada
*/

class Funcionario{
    private nome: string;

    constructor() {
        this.nome ='';
}
public getNome(){
    return this.nome;
}
public setNome(nome:string){
    this.nome = nome;
}}

export default Funcionario;