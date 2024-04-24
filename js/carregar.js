const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.foreach(tarefa => card(tarefa))

function card(tarefa){
    const cardTarefa = `
    <div class="nes-container with-title is-centered">
            <p class="title">${tarefa.titulo}</p>
            <p></p>
            <p></p>
            <a href="#" class="nes-badge is-icon">
                <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
                <span class="is-primary">150</span>
              </a>
                        
        </div>
    `
    const card = document.createElement("div")
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)
}