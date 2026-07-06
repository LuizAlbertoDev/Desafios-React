import { useState } from "react";

function ContadorDobrado() {
    const [numero,setNumero] = useState(1)
    return(
        <div>
            <p>Contador: {numero}</p>

            <button onClick={() => setNumero(numero * 2)}>Dobrar</button>
        </div>
    )
}
export default ContadorDobrado