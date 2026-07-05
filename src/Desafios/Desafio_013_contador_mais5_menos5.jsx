import { useState } from "react";

function ContadorMais5(){

    const [numero,setNumero] = useState(3)

    function diminuir(){
        if(numero >=5){
            setNumero(numero - 5)
        }
    }
   
    return(
        <div>
            <p>Contador: {numero}</p>

            <button onClick={() => setNumero(numero + 5)}>
                Somar + 5
            </button>
            
            <button onClick={diminuir}>
                Diminuir - 5
            </button>

            
        </div>
    )
}
export default ContadorMais5