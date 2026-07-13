import { useState } from "react";

function ListaTarefas(){
    const [texto, setTexto] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function removerUltima(){
        setTarefas(prev => prev.slice(0,-1))
    }

    function adicionarTarefas(){
        if(texto === "") return

        setTarefas(prev => [
            ...prev,
            {
                id:Date.now(),
                texto:texto
            }
        ])
        setTexto("")
    }
    return(
        <div>
            <h1>Tarefass</h1>

            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button onClick={adicionarTarefas}>
                Adicionar Tarefas
            </button>

            <button onClick={removerUltima}>Remover última tarefas</button>

            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        {tarefa.texto}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTarefas