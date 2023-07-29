class Biscoito{
    constructor(tamanho,cor,sabor){
        this._tamanho = tamanho;
        this._sabor = sabor;
        this._cor = cor;
    }

    get getTamanho(){
        return this._tamanho
    }

    set setTamanho(quantidade){
        this._tamanho = quantidade;

    }

    consumir(quantidade){
        this._tamanho -= quantidade;
        
        
    }

    decorar(){

    }
}

class Pessoa{
    constructor(nome,telefone,email){
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
    }

    atualizarDados(nomeAtt,telefoneAtt,emailAtt){
        if(nomeAtt.length <=2){

        }else{
            this._nome =nomeAtt;

        }
        
        this._telefone = telefoneAtt;
        this._email = emailAtt;

    }
}

class Funcionario extends Pessoa{
    constructor(nome,telefone,email,id){
        super(nome,telefone,email)
        this._id = id;

    }

    promovido(){
        console.log(`${this._nome} foi Promovido!!`)
    }

    aposentar(){
        console.log(`${this._nome} foi aposentado!!`)
    }
    

}

const pessoa1 = new Pessoa("Gustav",13996137823,"znsswz@gmail.com")
const funcionario1 = new Funcionario("guilherme", 139966666, "Guilehrme@gamil.com",1)

const Biscoito1 = new Biscoito(5,"Preto", "Chocolate");
Biscoito1.setTamanho = 8

funcionario1.promovido();
funcionario1.aposentar();


console.log(funcionario1._nome)


