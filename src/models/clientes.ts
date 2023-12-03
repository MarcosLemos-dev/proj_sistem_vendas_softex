class Clientes{
    private _codigoCliente: string;
    
    private _nomeEmpresa: string;
    
    private _nomeContato: string;
    
    private _cargoContato: string;
    
    private _endereco: string;
    
    private _cidade: string;
    
    private _regiao: string;
    
    private _cep: string;
    
    private _pais: string;
    
    private _telefone: string;
    
    private _fax: string;
    
   

    constructor() {
        this._codigoCliente ='';
        this._nomeEmpresa ='';
        this._nomeContato ='';
        this._cargoContato ='';
        this._endereco ='';
        this._cidade ='';
        this._regiao ='';
        this._cep ='';
        this._pais ='';
        this._telefone ='';
        this._fax ='';
     

}
public get codigoCliente(): string {
    return this._codigoCliente;
}
public set codigoCliente(value: string) {
    this._codigoCliente = value;
}
public get nomeEmpresa(): string {
    return this._nomeEmpresa;
}
public set nomeEmpresa(value: string) {
    this._nomeEmpresa = value;
}
public get nomeContato(): string {
    return this._nomeContato;
}
public set nomeContato(value: string) {
    this._nomeContato = value;
}
public get cargoContato(): string {
    return this._cargoContato;
}
public set cargoContato(value: string) {
    this._cargoContato = value;
}
public get endereco(): string {
    return this._endereco;
}
public set endereco(value: string) {
    this._endereco = value;
}
public get cidade(): string {
    return this._cidade;
}
public set cidade(value: string) {
    this._cidade = value;
}
public get regiao(): string {
    return this._regiao;
}
public set regiao(value: string) {
    this._regiao = value;
}
public get cep(): string {
    return this._cep;
}
public set cep(value: string) {
    this._cep = value;
}
public get pais(): string {
    return this._pais;
}
public set pais(value: string) {
    this._pais = value;
}
public get telefone(): string {
    return this._telefone;
}
public set telefone(value: string) {
    this._telefone = value;
}
public get fax(): string {
    return this._fax;
}
public set fax(value: string) {
    this._fax = value;
}

public setCargoContato(){
    return this._cargoContato;
}

}

export default Clientes;