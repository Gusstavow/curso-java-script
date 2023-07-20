var botao = document.querySelector(".botao-enviar");
botao.addEventListener("click", Calcular);

function Calcular() {

    let inicio = document.querySelector("#inicio")
    let fim = document.querySelector("#fim")
    let passos = document.querySelector("#passos")

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passos.value)

    var res = document.querySelector("#res")

    if(p <= 0 || p > f){
        alert("a contagem dos passos nao pode ser menor ou igual a 0 e tambem nao pode ser mais que o fim!");
        res.innerHTML ="tente passos maiores que 0 e menores que o fim"
    }else{
        if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
            res.innerHTML = "Impossivel contar!"
            alert("Error: Faltam dados!");
            
    
        } else {
            res.innerText = "Contando:";
          
    
            if (i < f) {
                for (let c = i; c <= f; c += p) {
    
                    res.innerHTML += `${c}👌`
    
                }
               
    
            } else {
                for (let c = i; c >= f; c-= p) {
                    res.innerHTML += `${c}👌`
    
                }
               
            }
            res.innerHTML += `\u{1F3C1}`
    
    
        }

    }
        
}
