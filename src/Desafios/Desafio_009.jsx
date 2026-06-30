import { useState } from "react";

function Carrinho(){

    const [produtos, setProdutos] = useState([
        {
            nome: "Teclado",
            preco: 399.99
        },
        {
            nome: "Mouse",
            preco: 99.90
        },
        {
            nome: "Monitor",
            preco: 1299.99
        },
        {
            nome: "Webcam",
            preco: 999.99
        }
    ]);
    const [carrinho,setCarrinho] = useState([])

    function adicionarCarrinho(produto){
        setCarrinho([...carrinho,produto])
    }

    const total = carrinho.reduce((soma,item) => soma + item.preco,0)

    return(
        <div>

        <h1>Produtos</h1>
        <ul>
            {produtos.map((produto,index) => (
                <li key={index}>
                    {produto.nome} - R$ {produto.preco} <button onClick={() => adicionarCarrinho(produto)}>Adicionar</button>
                </li>
            ))}
        </ul>

        <h1>Itens no Carrinho</h1>

        <ul>
            {carrinho.map((item,index) => (
                <li key={index}>
                    {item.nome} - R$ {item.preco}
                </li>
            ))}
        </ul>

        <h2>Total Carrinho: R$ {total.toFixed(2)}</h2>

        <button onClick={() => setCarrinho([])}>Limpar Carrinho</button>



        </div>
    )
}
export default Carrinho