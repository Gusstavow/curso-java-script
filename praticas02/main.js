const div01 = document.querySelector(".div01")
const divs = document.querySelectorAll(".d")


// div01.addEventListener("mouseenter", () => {
//     div01.classList.toggle("fundo-azul");
//     if (div01.classList.contains("fundo-azul")) {
//         div01.innerHTML = "TESTE";


//     } else {
//         div01.innerHTML = " "
//     }

// })

// div01.addEventListener("mouseout", () => {
//     div01.classList.toggle("fundo-azul");
// })

divs.forEach((item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("fundo-azul")

    })
    item.addEventListener("mouseout",()=>{ item.classList.remove("fundo-azul")})
}))