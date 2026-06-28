import { useState } from "react";
function Saudacao(){

    const [texto, setTexto] = useState('')

    return(

        <div>
            <input 
                value={texto}
                onChange={(e) => setTexto(e.target.value)}  
            />
            <p>{texto === '' ? 'Digite seu nome' : `olá, ${texto}!`}</p>
        </div>
    )
}
export default Saudacao