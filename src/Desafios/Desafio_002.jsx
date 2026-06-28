import { useState } from 'react'

function Contador() {
    const [numero, setNumero] = useState(0)

    function diminuir(){
        if(numero>0){
            setNumero(numero-1)
        }
    }

    return (
        <div>
            <p>Contador: {numero}</p>
            <button onClick={diminuir}>
                Diminuir
            </button>

            <button onClick={() => setNumero(numero + 1)}>
                Somar
            </button>
        </div>
    )
}

export default Contador