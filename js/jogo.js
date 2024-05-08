document.addEventListener("DOMContentLoaded", function() {
    // Função para validar o formulário de cadastro de jogos
    function validarFormulario() {
        var titulo = document.getElementById('titulo').value;
        var imagem = document.getElementById('imagem').files[0];
        var valor = document.getElementById('valor').value;

        var tituloValido = titulo.trim() !== '';
        var imagemValida = imagem !== undefined;
        var valorValido = /^\d+(,\d{1,2})?$/.test(valor);

        if (!tituloValido) {
            document.getElementById('titulo-erro').textContent = ' insira o nome do jogo.';
        } else {
            document.getElementById('titulo-erro').textContent = '';
        }

        if (!imagemValida) {
            document.getElementById('imagem-erro').textContent = ' selecione uma imagem para o jogo.';
        } else {
            document.getElementById('imagem-erro').textContent = '';
        }

        if (!valorValido) {
            document.getElementById('valor-erro').textContent = ' insira um valor válido em reais.';
        } else {
            document.getElementById('valor-erro').textContent = '';
        }

        return tituloValido && imagemValida && valorValido;
    }

    // Função para cadastrar um jogo no localStorage
    document.querySelector("#botao-cadastrar").addEventListener("click", (event) => {
        event.preventDefault(); // Impede o envio do formulário para que possamos manipular os dados primeiro
        
        const form = document.querySelector("form");

        const jogo = {
            id: "id" +new Date().getTime(),
            titulo: form.querySelector("#titulo").value,
            imagem: form.querySelector("#imagem").files[0], // Somente o primeiro arquivo é considerado
            valor: form.querySelector("#valor").value
        };

        if (validarFormulario()) {
            // Carregar os jogos já existentes no localStorage ou inicializar um array vazio
            const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
            // Adicionar o novo jogo à lista de jogos
            jogos.push(jogo);
            // Salvar a lista atualizada de jogos de volta ao localStorage
            localStorage.setItem('jogos', JSON.stringify(jogos));
            console.log("Jogo cadastrado com sucesso!");
            // Redirecionar para o index.html
            window.location.href = "/index.html";
        }
    });
});
