export class Ocorrencia {
    public id       : string;
    public data     : string;
    public hora     : string;
    public tipo     : string;
    public vitima   : string;
    public tipooc   : string;
    public endereco : string;
    public agressor : string;

constructor(obj?: Partial <Ocorrencia>){
    if (obj){
    this.id       =  obj.id
    this.data     =  obj.data
    this.hora     =  obj.hora
    this.tipo     =  obj.tipo
    this.vitima   =  obj.vitima
    this.tipooc   =  obj.tipooc
    this.endereco =  obj.endereco
    this.agressor =  obj.agressor
    }
 } 
  toString(){
    const objeto = `{
        "id"      :  "${this.id}",
        "data"    :  "${this.data}",
        "hora"    :  "${this.hora}",
        "tipo"    :  "${this.tipo}",
        "vitima"  :  "${this.vitima}"
        "tipooc"  :  "${this.tipooc}"
        "endereco":  "${this.endereco}"
        "agressor":  "${this.agressor}"
    }`
  return objeto
 }

 toFirestore (){
    const ocorrencia = {
        id   :     this.id,
        data :     this.data,
        hora :     this.hora,
        tipo :     this.tipo,
        vitima :   this.vitima,
        tipooc :   this.tipooc,
        endereco : this.endereco,
        agressor : this.agressor
    }
    return ocorrencia
 }
}