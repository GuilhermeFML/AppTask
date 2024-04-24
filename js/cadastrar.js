document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    validar(tarefa)
    
    console.log(tarefa)

    salvar(tarefa)
})

function salvar (tarefa){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
    window.location.href = "index.html"
}

function validar(tarefa){
    if(tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText= "Nome é obrigatório "
    }
    if(tarefa.descricao.trim() == "" || tarefa.descricao.lenght < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText= "E-mail inválido"
    }
    if(tarefa.pontos.trim() == "" || tarefa.pontos.lenght > 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText= "Valor deve ser maior que 0"
    }
}

function limparErros(){
    const campos = document.querySelectorAll("input .is-error, textarea .is-erro")
    console.log(campos)
    
    document
    .querySelector("input .is-error, textarea .is-error")
    foreach((input) => {input.classList.remove("is-error")})

    document.querySelectorAll(".nes-field span")
    .forEach(span => span.innerText = "")
   
}