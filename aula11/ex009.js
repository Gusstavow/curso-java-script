var pais = document.querySelector("option.opcao");
var res = document.querySelector("div#res");
var botao = document.querySelector("input#botao_enviar");

botao.addEventListener("click", Enviar);

function Enviar() {
    if (pais.value == "BR") {
        res.innerHTML = "Brasileiro!";

    }
}


