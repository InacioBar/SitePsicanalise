import React, { useState } from "react";
import "../contagem/contagem.css";

function Contagem() {
    const [count, setCount] = useState(0);

    return (
    <>
        <h1>Aqui você pode adicionar a quantidade de itens que deseja comprar</h1>
        <p>Você deseja comprar {count} itens</p>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary "> 
                +
            </button>
            <button onClick={() => setCount(count - 1)} className="btn btn-danger ">
                -
            </button>
    </>
);
}

export default Contagem;