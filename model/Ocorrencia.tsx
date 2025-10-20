export class Ocorrencia {
    public id        : string;
    public data      : string;
    public origem    : string;
    public tipo      : string;
    public endereco  : string;
    public denuncia  : string;
    public quantidade: string;
    public foto      : string;
    //dados do proprietario
    public nome      : string;
    public rg        : string;
    public cpf       : string;
    public telefone  : string;
    public enderecop : string;




constructor(obj?: Partial <Ocorrencia>){
    if (obj){
    this.id         =  obj.id
    this.data       =  obj.data
    this.tipo       =  obj.tipo
    this.origem     =  obj.origem
    this.endereco   =  obj.endereco  
    this.denuncia   =  obj.denuncia
    this.quantidade =  obj.quantidade
    this.foto       =  obj.foto
    //dados do proprietario
    this.nome       =  obj.nome
    this.rg         =  obj.rg
    this.cpf        =  obj.cpf
    this.telefone   =  obj.telefone
    this.enderecop  =  obj.enderecop
    }
 } 
  toString(){
    const objeto = `{
    "id"        :  "${this.id}",
    "data"      :  "${this.data}",
    "origem"    :  "${this.origem}",
    "tipo"      :  "${this.tipo}",
    "endereco"  :  "${this.endereco}"
    "denuncia"  :  "${this.denuncia}"
    "quantidade":  "${this.quantidade}"
    "foto"      :  "${this.foto}"

    "nome"      :  "${this.nome}"
    "rg"        :  "${this.rg}"
    "cpf"       :  "${this.cpf}" 
    "telefone"  :  "${this.telefone}" 
    "enderecop" :  "${this.enderecop}"     
    }`
  return objeto
 }

 toFirestore (){
    const ocorrencia = {
        id         :  this.id,
        data       :  this.data,
        origem     :  this.origem,
        tipo       :  this.tipo,
        endereco   :  this.endereco,
        denuncia   :  this.denuncia,
        quantidade :  this.quantidade,
        foto       :  this.foto,
        //dados do proprietario
        nome       :  this.nome,
        rg         :  this.rg,
        cpf        :  this.cpf,
        telefone   :  this.telefone,
        enderecop  :  this.enderecop
    }
    return ocorrencia
 }
}