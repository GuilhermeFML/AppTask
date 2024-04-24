document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        imagem: form.imagem.files,
        valor: form.valor.value
    }

    validar(tarefa)
    
    console.log(tarefa)
})

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

        return tituloValido && descricaoValida && imagemValida && valorValido;
    }
