
function GerarTabuada() {
    
    //pegando numero do usuario
    let numero = document.querySelector("input#id-numero")

    //pegando a div res para mostra o resulstado
    let res = document.querySelector("div#res");




    //capturando a tag select
    let tab = document.querySelector("select#seltab");



    //inserindo a tag option dentro da tag que foi capturada antes


    



    if (numero.value.length == 0) {
        alert("Por favor, digite um numero!");


    } else {
        //convertendo o numero que foi digitado pelo usuario
        let numConvertido = Number(numero.value)
        tab.innerHTML = ""
        for (let i = 1; i <= 10; i++) {

            //criando a tag option dinamicamente
            let item = document.createElement("option");
            item.text = `${numConvertido} x ${i} = ${numConvertido*i}`;
            item.value = `tab${i}`
    
            tab.appendChild(item);
            
    
    
    
        }

    }



    
}