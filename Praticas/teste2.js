

let pessoa = {nome:"jose", sexo:"M",peso:85.4,engordar(p=0){
    this.peso += p;
}}


pessoa.engordar(6)
console.log(pessoa.peso);