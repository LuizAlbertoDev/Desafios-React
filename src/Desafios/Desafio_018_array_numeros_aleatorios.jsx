import { useState } from "react";

function AdicionarAleatorio(){
    const [numeros,setNumeros] = useState([1,2,3])

    const adicionarNumero = () => {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1

        setNumeros(prev =>[
            ...prev,
            numeroAleatorio
        ])
    }

    return(
        <div>
            <h1>Adicionar numero aleatorio</h1>

            <h4>Numero aleatorio adicionado</h4>
            <p>{numeros[numeros.length -1]}</p>

            <button onClick={adicionarNumero}>Adicionar Numero aleatorio</button>

            <h4>Numeros do Array</h4>
            <ul>
                {numeros.map((numero,index) => {
                    return <li key={index}>{numero}</li>
                })}
            </ul>
        </div>
    )
}
export default AdicionarAleatorio