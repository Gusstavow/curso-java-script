

let valores = [1,2,4,5,6,8,3];
let numero = 6;

function Teste(){
    for(var i = 0; i < valores.length; i++){
        if(valores[i] == numero){
            console.log("Exite este numero no vetor")
            return true

        }else{
            console.log("Nao existe este numero");
            return false
        }

    }
}
console.log(Teste())