import { useState } from "react";

function Calculadora(){

    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("")
    const [resultado, setResultado] = useState(0)

    function limpar() {
        setN1(0);
        setN2(0);
    }

    function somar(){
        setResultado(n1 + n2)
        limpar()
    }

    function subtrair() {
        if (n1 - n2 < 0) {
            return;
        }
        setResultado(n1 - n2);
        limpar()
    }

    function dividir(){
        if(n2 === 0){
            return
        }
        
        setResultado(n1 / n2)
        limpar()    
    }

    function multiplicar(){
        setResultado(n1 * n2)
        limpar() 
    }

    return(
        <div>
            <input 
            type="number" 
            placeholder="Numero 1" 
            value={n1} onChange={(e) =>setN1(Number(e.target.value))}/> 

            <input 
            type="number" 
            placeholder="Numero 2" 
            value={n2} onChange={(e) =>setN2(Number(e.target.value))}/>

            <button onClick={somar}> + </button>
            <button onClick={subtrair}> - </button>
            <button onClick={dividir}> / </button>
            <button onClick={multiplicar}> * </button>

            <h2>Resultado da Conta</h2>
            <p>{resultado}</p>
        </div>
    )
}
export default Calculadora