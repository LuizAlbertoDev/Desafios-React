import { useState } from "react";

function Placar() {

    const [placarTime1, setPlacarTime1] = useState(0);
    const [placarTime2, setPlacarTime2] = useState(0);

    function golTime1() {
        setPlacarTime1(placarTime1 + 1);
    }

    function golTime2() {
        setPlacarTime2(placarTime2 + 1);
    }

    function resetar() {
        setPlacarTime1(0);
        setPlacarTime2(0);
    }

    let ganhando = "Empatado";

    if (placarTime1 > placarTime2) {
        ganhando = "Time aaa está ganhando";
    } 
    else if (placarTime2 > placarTime1) {
        ganhando = "Time bbb está ganhando";
    }

    return (
        <div>
            <h1>Placar</h1>

            <h2>Time aaa - {placarTime1} <button onClick={golTime1}>Gol!</button></h2>
            <h2>Time bbb - {placarTime2} <button onClick={golTime2}>Gol!</button></h2>

            <button onClick={resetar}>Resetar</button>

            <h2>{ganhando}</h2>
        </div>
    );
}

export default Placar