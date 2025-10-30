export class Criminoso {
        public id       : string;
        public nome     : string;
        public cpf      : string;
        public crimecom : string;

constructor(obj?: Partial <Criminoso>){
    if (obj){
        this.id        = obj.id
        this.nome      = obj.nome
        this.cpf       = obj.cpf
        this.crimecom  = obj.crimecom
    }
 } 
  toString(){
    const objeto = `{
        "id"       :   "${this.id}",
        "nome"     :   "${this.nome}",
        "cpf"      :   "${this.cpf}",
        "crimecom" :   "${this.crimecom}",
        }`
  return objeto
 }

 toFirestore (){
    const criminosos = {
        id       : this.id,
        nome     : this.nome,
        cpf      : this.cpf,
        crimecom : this.crimecom,
    }
    return criminosos
 }
}