// document.addEventListener("click", () => console.log("click"))

class Carro {

    constructor(corParametro, velocidade, modelo) {

        this._cor = corParametro
        this._velocidade = velocidade
        this._modelo = modelo
        this._ligado = false
        this._combustivel = 10

    }

    informacoes() {
        console.log(`Cor:......... ${this._cor}`);
        console.log(`Velocidade:.. ${this._velocidade}`);
        console.log(`Modelo:...... ${this._modelo}`);
        console.log(`Ligado:...... ${this._ligado ? "Sim" : "Nao"}`);
        console.log(`Combustivel.. ${this._combustivel}`);
        console.log("===================================");
    }

    ligar() {
        this._ligado = true
    }

    desligar() {
        this._ligado = false
    }

    set setCombustivel(quantidadeEmLitros) {
        if(quantidadeEmLitros < 0 || quantidadeEmLitros > 100){
            alert("Valor invalido!!");

        }else{
            this._combustivel = quantidadeEmLitros;

        }
        

    }

    get getModelo() {
        return this._modelo

    }

}

let carro1 = new Carro("bege", "100Km/h", "A");
let carro2 = new Carro("Vermelho", "200Km/h", "B")

carro1._cor = "Preto"
carro1.ligar()
carro1.setCombustivel = 90

carro1.informacoes();
carro2.informacoes();

console.log(carro1.getModelo);