let num = document.querySelector("input#fnum");
let lista = document.querySelector("#flista");
let res = document.querySelector("#res");
let valores = [];

let botaoAd = document.querySelector("#botao-adicionar");
botaoAd.addEventListener("click", adicionar)

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        limparTelaRes()

    } else {
        alert("Valor invalido ou ja encontrado na lista!");
    }

    num.value = ""
    num.focus()

}

function isNumero(value) {
    if (Number(value) <= 0 || Number(value) > 100) {
        return false

    } else {
        return true
    }

}

//outro jeito de se fazar a funcao isLista()
// function isLista(value, l) {
//     if (l.indexOf(Number(value)) != -1) {
//         return true;


//     } else {
//         return false;
//     }

// }
function limparTelaRes(){
    res.innerHTML = "";
}

function isLista(value, l) {

    for (let i = 0; i < l.length; i++) {

        if (valores[i] == value) {
            return true

        }

    }


}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!");
    }
    else{
        let tot = valores.length
        limparTelaRes();
        res.innerHTML += `<p> Ao todo, temos ${tot} numero(s) cadastrados. </p>`
        valoresMaiorEMenor();
        somaEMedia();
        
    }

}

function valoresMaiorEMenor(){
    let maior = valores[0];
    let menor = valores[0];
    

    for(let i = 1; i <= valores.length; i++){
        if(valores[i] > maior){
            maior = valores[i];

        }

        if(valores[i] < menor){
            menor = valores[i];

        }

    }

    res.innerHTML +=`<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML +=`<p>O menor valor informado foi o ${menor}</p>`
}

function somaEMedia(){
    let soma = 0;
    let media = 0;

    for(let i = 0; i <valores.length; i++){
        soma += Number(valores[i]);


    }
    media = soma/valores.length;

    res.innerHTML +=` <p>A soma de todos os valores adicionado e de ${soma}.</p>`
    res.innerHTML +=` <p>A media e ${media}.</p>`
}