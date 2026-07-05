import {useState} from 'react'

function AtualizadorNome(){

    const [nome,setNome] = useState("")

    return(
        <div>
            <input 
                value = {nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <p>
                {nome === "" ? "Digite seu nome" : `Olá ${nome}`}
            </p>
        </div>
    )
}
export default AtualizadorNome