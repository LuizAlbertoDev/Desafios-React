// Desafio 020 - Toggle Mostrar/Ocultar
//
// Crie um componente MostrarOcultar com um estado booleano "visivel".
// Um botão alterna entre "Mostrar" e "Ocultar", e quando "visivel" for true,
// exibe um parágrafo com o texto "Você me encontrou!".

import { useState } from "react";

function MostrarOcultar(){
    const [mostrar,setMostrar] = useState(false)

    function ativo(){
        setMostrar(!mostrar)
    }
    
    return(
        <div>
            <button onClick={ativo}>
                {mostrar ? "Ocultar" : "Mostrar"}
            </button>

            {mostrar &&<p>Você me encontrou!</p>}
        </div>
    )
}

export default MostrarOcultar