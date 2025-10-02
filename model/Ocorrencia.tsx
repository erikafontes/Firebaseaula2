export class Ocorrencia {
    public id      : string;
    public data    : string;
    public origem  : string;
    public tipo  : string;
    public endereco: string;
    public denuncia: string;
    public foto    : string;


constructor(obj?: Partial <Ocorrencia>){
    if (obj){
    this.id       =  obj.id
    this.data     =  obj.data
    this.tipo     =  obj.tipo
    this.origem   =  obj.origem
    this.endereco =  obj.endereco
    this.denuncia =  obj.denuncia
    this.foto     =  obj.foto
    }
 } 
  toString(){
    const objeto = `{
        "id"      :  "${this.id}",
        "data"    :  "${this.data}",
        "origem"  :  "${this.origem}",
         "tipo"  :  "${this.tipo}",
        "endereco":  "${this.endereco}"
        "denuncia":  "${this.denuncia}"
        "foto"    :  "${this.foto}"
    }`
  return objeto
 }

 toFirestore (){
    const ocorrencia = {
        id       :     this.id,
        data     :     this.data,
        origem   :     this.origem,
         tipo   :     this.tipo,
        endereco :     this.endereco,
        denuncia :     this.denuncia,
        foto     :     this.foto
    }
    return ocorrencia
 }
}