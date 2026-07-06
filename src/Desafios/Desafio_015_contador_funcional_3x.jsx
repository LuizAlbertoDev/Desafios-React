import { useState } from "react";

function Somar3x(){
    const [numero,setNumero] = useState(0)

    return(
        <div>
            <p>Contador {numero}</p>

            <button 
                onClick={() => {
                    setNumero(prev => prev + 1);
                    setNumero(prev => prev + 1);
                    setNumero(prev => prev + 1);
                }}>
                Adicionar
            </button>
        </div>
    )
}
export default Somar3x