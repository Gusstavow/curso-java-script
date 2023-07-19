

function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    

    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora sao ${hora} hora(s).`;

    if(hora >= 0 && hora <12){
        //Bom dia
        img.src = "./imagens/morning.png";
        document.body.style.backgroundColor = "#FCE1C4"


    }else if(hora >= 12 && hora <=18){
        //boa tarde
        img.src = "./imagens/afternoon.png"
        document.body.style.backgroundColor = "#C96F4A"

    }else{
        //noite
        img.src ="./imagens/night.png"
        document.body.style.backgroundColor = "#00131A"
    }

}
