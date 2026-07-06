import { useState } from "react";

function Toggle(){
    const [ativo,setAtivo] = useState(false)

    function alterar(){
        setAtivo(!ativo)
    }
    return(
        <div>
            <button onClick={alterar}>
                {/* desafio pedia emoji e me cobrou para colocar  =D */}
                {ativo ? "Ligado ✅" : "Desligado ❌"}
            </button>
        </div>
    )
}
export default Toggle