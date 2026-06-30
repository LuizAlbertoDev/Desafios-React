import { useState } from "react";

function FiltroAlunos () {

    const [alunos,setAlunos] = useState([
        {
            nome:'Luiz',
            nota:8.0
        },
        {
            nome:'Stefani',
            nota:9.0
        },
        {
            nome:'Gregory',
            nota:6.0
        },
        {
            nome:'Maite',
            nota:6.0
        },
        {
            nome:'Celia',
            nota:10.0
        }]
    )

    const [nota,setNota] = useState()

    const aprovados = alunos.filter(aluno => aluno.nota >= nota)

    const reprovados = alunos.filter(aluno => aluno.nota < nota)

    return(
        <div>
            <h2>Nota Minima</h2>
            <input type="number" onChange={(e) => setNota(Number(e.target.value))}/>
            

            <h2>Alunos Aprovados</h2>
            <ul>
                {aprovados.map((aluno,index) => (
                    <li key={index}>
                        Nome: {aluno.nome} - Nota: {aluno.nota} - Aprovado
                    </li>
                ))}
            </ul>

            <h2>Alunos em Reprovados</h2>
            <ul>
                {reprovados.map((aluno,index) => (
                    <li key={index}>
                        Nome: {aluno.nome} - Nota: {aluno.nota} - Reprovado
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FiltroAlunos