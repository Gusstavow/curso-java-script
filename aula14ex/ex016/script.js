

function Calcular() {

    botao.addEventListener("click", Calcular);

    let inicio = document.querySelector("input#inicio")
    let fim = document.querySelector("input#fim")
    let passos = document.querySelector("input#passos")

    var res = document.querySelector("input#res")
    var botao = document.querySelector("input.botao-enviar");

    if(false) {
        alert("Error: Faltam dados!");

    }else{
        res.innerHTML = `Contando:`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        for (let c = i; c < f; c += p) {

            res.innerHTML += `${c}👌`
    
            
    
    
        }
    }


    



}
