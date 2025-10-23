export class Crimes {
    public id        : string;
    public nome      : string;

constructor(obj?: Partial <Crimes>){
    if (obj){
        this.id       = obj.id
        this.nome     = obj.nome
      
    }
 } 
  toString(){
    const objeto = `{
    "id"       :   "${this.id}",
    "nome"     :   "${this.nome}","
    }`
  return objeto
 }

 toFirestore (){
    const crimes = {
        id       : this.id,
        nome     : this.nome,
    }
    return crimes
 }
}