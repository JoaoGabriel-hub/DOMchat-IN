function enviar_msg() {

    /** PEGANDO A MSG DA TEXTAREA E CRIANDO DIV E TEXTO **/

    let input = document.querySelector(".caixaMsg");
    let card = document.createElement("div");
    let texto = document.createElement("p");
    texto.innerText = input.value;
    card.append(texto);
    card.classList.add("card");

    /** DIV PARA TER OS 2 BOTÕES **/

    let botaoContainer = document.createElement("div");
    botaoContainer.classList.add("botao-container");

    /** CRIANDO BOTÃO DE EDITAR **/

    let btn_editar = document.createElement("button");
    btn_editar.innerText = "Editar";
    btn_editar.classList.add("btn_editar");
    botaoContainer.append(btn_editar);

    /** CRIANDO BOTÃO DE EXCLUIR **/

    let btn_excluir = document.createElement("button");
    btn_excluir.innerText = "Excluir";
    btn_excluir.classList.add("btn_excluir");
    botaoContainer.append(btn_excluir);

    /** FUNÇÃO DE EDITAR **/

    btn_editar.addEventListener("click", () => {
        let novoTexto = prompt("Edite a mensagem:", texto.innerText);
        texto.innerText = novoTexto;
    })

    /** FUNÇÃO DE EXCLUIR **/

    btn_excluir.addEventListener("click", () => {
        card.remove();
        botaoContainer.remove();
    });

    /** ADICIONANDO CARD DE MENSAGEM E BOTÕES NO ESPAÇO PARA TAL **/

    let secao = document.querySelector(".espaco");
    secao.append(card);
    secao.append(botaoContainer);
    input.value = '';
}   

/** CHAMANDO A FUNÇÃO **/

let btn_enviar = document.querySelector(".btn_enviar");
btn_enviar.addEventListener("click", ()=>{enviar_msg()});