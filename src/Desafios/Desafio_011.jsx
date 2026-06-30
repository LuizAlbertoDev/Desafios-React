import { useState } from "react";

function ToggleTema() {

    const [tema, setTema] = useState(false);

    return (
        <div
        style={{
            backgroundColor: tema ? "black" : "white",
            color: tema ? "white" : "black",
            padding: "20px",
            minHeight: "100vh"
        }}
        >
            <h1>{tema ? "Modo Escuro" : "Modo Claro"}</h1>

            <button onClick={() => setTema(!tema)}>
                {tema ? "Modo Claro" : "Modo Escuro"}
            </button>
        </div>
    );
}

export default ToggleTema

