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
        this._nome =nomeAtt,
        this._telefone = telefoneAtt;
        this.email = emailAtt;

    }
}

const Pessoa1 = new Pessoa("Gustav",)

const Biscoito1 = new Biscoito(5,"Preto", "Chocolate");
Biscoito1.setTamanho = 8

Biscoito1.consumir(5)
console.log(Biscoito1.getTamanho)

