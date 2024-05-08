function inc(id){
    const tarefas = JSON.parse( localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(tarefa => tarefa.id = id)
    tarefa.status += 10
    localStorage.setItem('tarefas')

}