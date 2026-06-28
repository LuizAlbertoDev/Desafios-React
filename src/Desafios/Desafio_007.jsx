import { useState } from "react";

function FormCadastro () {

    const [usuario, setUsuario] = useState({
        nome:'',
        email:'',
        idade:''
    })

    function limpar(){
        setUsuario({
            nome:'',
            email:'',
            idade:''
        })
    }

    return(
        <div>
            <input type="text" 
            placeholder="Nome"
            value={usuario.nome} 
            onChange={(e) =>
                setUsuario({
                    ...usuario,
                    nome: e.target.value
                })}
            /> <br />

            <input type="email" 
            placeholder="Email"
            value={usuario.email} 
            onChange={(e) =>
                setUsuario({
                    ...usuario,
                    email: e.target.value
                })}
            /> <br />

            <input type="number" 
            placeholder="Idade"
            value={usuario.idade} 
            onChange={(e) =>
                setUsuario({
                    ...usuario,
                    idade: e.target.value
                })}
            /> <br />

            <button onClick={limpar}>Limpar</button>

            <h2>Dados do Usuario</h2>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
            <p>Idade: {usuario.idade}</p>
        </div>
    )
}
export default FormCadastro