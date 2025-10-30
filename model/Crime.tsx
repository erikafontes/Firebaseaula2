export class Crime {
    public id        : string;
    public nome      : string;
    public tipo      : string;

constructor(obj?: Partial <Crime>){
    if (obj){
        this.id       = obj.id
        this.nome     = obj.nome
        this.tipo     = obj.tipo
    }
 } 
  toString(){
    const objeto = `{
    "id"       :   "${this.id}",
    "nome"     :   "${this.nome}",
    "tipo"     :   "${this.tipo}",
    }`
  return objeto
 }

 toFirestore (){
    const crimes = {
        id       : this.id,
        nome     : this.nome,
        tipo     : this.tipo,
    }
    return crimes
 }
}