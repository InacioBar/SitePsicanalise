import React, { useState } from "react";
import "../formulario/formulario.css";

function Formulario() {    
        const [value, setValue] = useState('');

        const handleChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <>
            <div className="formulario">
                <input type="text" value={value} onChange={handleChange} className="form-control"/>
                <p>O Nome digitado é: {value}</p>
                <button>Teste de botao</button>
            </div>
            </>
        );
}

export default Formulario;