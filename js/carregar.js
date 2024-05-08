// Função para carregar os jogos do localStorage e exibi-los na página
function carregarJogos() {
    const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
    jogos.forEach(jogo => card(jogo));
}

// Função para criar o HTML de um card de jogo e adicioná-lo à página
function card(jogo) {
    const cardJogo = `
        <div class="nes-container with-title is-centered">
            <p class="title">${jogo.titulo}</p>
            <p><img src="" id="imagem-${jogo.id}" style="max-width: 200px;"></p>
            <p>Valor: R$ ${jogo.valor}</p>
        </div>
    `;
    const card = document.createElement("div");
    card.innerHTML = cardJogo;
    document.querySelector("#lista-de-tarefas").appendChild(card);

    // Agora, vamos carregar a imagem do jogo e atualizar a URL da imagem
    const imagemElement = document.getElementById(`imagem-${jogo.id}`);
    if (jogo.imagem instanceof Blob) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imagemElement.src = event.target.result;
        };
        reader.readAsDataURL(jogo.imagem);
    } else {
        imagemElement.src = "placeholder.jpg"; // Coloque aqui o caminho de uma imagem de placeholder, caso nenhum jogo tenha imagem
    }
}

// Chame a função para carregar os jogos quando a página for carregada
document.addEventListener("DOMContentLoaded", carregarJogos);
