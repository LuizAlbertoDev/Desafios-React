import { useState } from "react";

function Cadastro(){

    const [usuario,setUsuario] = useState({
        nome:"",
        idade:0
    })

    return(
        <div>
            <p>Cadastro</p>

            <input 
                type="text"
                placeholder="Nome"
                value={usuario.nome}
                onChange={(e) =>
                    setUsuario({
                        ...usuario,
                        nome: e.target.value
                    })}
            />

            <input
                type="number"
                placeholder="Idade"
                value={usuario.idade}
                onChange={(e) =>
                    setUsuario({
                        ...usuario,
                        idade: Number(e.target.value)
                    })
                }
            />

            <h3>Dados do usuario</h3>
            <p>Nome: {usuario.nome}</p>
            <p>Idade: {usuario.idade}</p>
        </div>
    )
}
export default Cadastro