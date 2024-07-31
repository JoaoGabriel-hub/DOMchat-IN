function enviar_msg() {
    let input = document.querySelector(".caixaMsg");
    let card = document.createElement("div");
    let texto = document.createElement("p");
    texto.innerText = input.value;
    card.append(texto);
    card.classList.add("card");

    let botaoContainer = document.createElement("div");
    botaoContainer.classList.add("botao-container");

    let btn_editar = document.createElement("button");
    btn_editar.innerText = "Editar";
    btn_editar.classList.add("btn_editar");
    botaoContainer.append(btn_editar);

    let btn_excluir = document.createElement("button");
    btn_excluir.innerText = "Excluir";
    btn_excluir.classList.add("btn_excluir");
    botaoContainer.append(btn_excluir);

    btn_excluir.addEventListener("click", () => {
        card.remove();
        botaoContainer.remove();
    });

    btn_editar.addEventListener("click", () => {
        let novoTexto = prompt("Edite a mensagem:", texto.innerText);
        texto.innerText = novoTexto;
    })

    let secao = document.querySelector(".espaco");
    secao.append(card);
    secao.append(botaoContainer);
    input.value = '';
}   

let btn_enviar = document.querySelector(".btn_enviar");
btn_enviar.addEventListener("click", ()=>{enviar_msg()});