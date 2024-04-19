document.querySelector("#botao-cadastrar").addEventListener("click",() => {

    const form = document.querySelector("form")

    const tarefa = {
        titulo:     form.titulo.value,
        descricao:  form.descricao.value,
        pontos:     form.pontos.value
    }
    
    validar(tarefa)

    console.log(tarefa)
})
function validar(tarefa){
        limparErros()


    if (tarefa.titulo.trim()==""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "Titulo é obrigatorio"
    }

    if (tarefa.descricao.trim()=="" ||tarefa.descricao.length < 10){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "a descricao deve ter pelo menos 10 caracteres"
        console.log("Descrição obricatoria")
    }   
     if (tarefa.ponto <=0){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "tem que ser maior que 0"
        
    }
}


function limparErros(){
    document.querySelectorAll("input .is-error, textarea .is-error").classList.remove("is-error")
}