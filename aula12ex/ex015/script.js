

function Verificar() {
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res");

    if (fano.value == 0 || Number(fano.value) > ano) {
        alert("[ERROR] verifique os dados e tente novamente!");

    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute("src", "./imgs/criancaH.jpg")

            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "./imgs/jovemH.jpg")

            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "./imgs/coringa.jpg")

            } else if (idade < 90) {
                //idoso
                img.setAttribute("src", "./imgs/idosoH.jpg")
            } else if (idade > 90) {
                img.setAttribute("src", "./imgs/esqueleto.jpg")

            }
            document.body.style.background = "rgb(73, 114, 250)"

        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute("src", "./imgs/criancaM.jpg")

            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "./imgs/jovemM.jpg")

            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "./imgs/adultoM.jpg")

            } else if (idade < 90) {
                //idoso
                img.setAttribute("src", "./imgs/idosoM.jpg")
            }
            else if (idade > 90) {
            img.setAttribute("src", "./imgs/esqueleto.jpg")

            }
        document.body.style.background = "rgb(245, 147, 237)"
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
}
}