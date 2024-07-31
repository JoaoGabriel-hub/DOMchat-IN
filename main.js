function enviar_msg() {
    let input = document.querySelector(".caixaMsg");
    let card = document.createElement("div");
    let texto = document.createElement("p");
    texto.innerText = input.value;
    card.append(texto);
    card.classList.add("card")

    let secao = document.querySelector(".espaco");
    secao.append(card);
}   

let btn_enviar = document.querySelector(".btn_enviar");
btn_enviar.addEventListener("click", ()=>{enviar_msg()})