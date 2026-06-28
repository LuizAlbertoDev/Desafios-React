import { useState } from "react"

function ListaTarefa(){

    const [tarefa, setTarefa] = useState(['Lavar Roupa', 'Comprar Ovos'])
    const [novaTarefa, setNovaTarefa] = useState('')

    function adicionar() {

        if(novaTarefa.trim() === ''){
            return
        }

        setTarefa([...tarefa, novaTarefa.trim()])
        setNovaTarefa('')
    }
    return (
        <div>
            <input
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
            />
            <button onClick={adicionar}>Adicionar</button>

            <ul>
                {tarefa.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )

}

export default ListaTarefa