import { useState } from "react";

function MostrarSenha(){

    const [mostrar, setMostrar] = useState(false)

    function alternar(){
        setMostrar(!mostrar)
    }

    return(
        <div>
            <input type={mostrar ? "text" : "password"} />

            <button onClick={alternar}>
                {mostrar ? "Esconder Senha" : "Mostrar Senha"}
            </button>
        </div>
    )
}
export default MostrarSenha