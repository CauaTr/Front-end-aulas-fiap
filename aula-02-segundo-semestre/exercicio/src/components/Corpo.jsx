import { useState } from "react"

export default function Corpo() {

    const [cont, setCont] = useState(0)

    return (
        <div>
            <h2>Nossos Sabores</h2>
            <ul>
                <li>Chocolate Amargo</li>
                <li>Baunilha</li>
                <li>Morango</li>
                <li>Banana</li>
                <li>Flocos</li>
            </ul>

            <h2>Deliciosos Acompanhamento</h2>
            <ul>
                <li>Granulado</li>
                <li>Cobertura de Caramelo</li>
                <li>Gotas de Chocolate Quente</li>
            </ul>
            <p>Número de Bolas: {cont} Bolas</p>
            <button onClick={() => setCont(cont + 1)}>Adicionar Bola +</button>
        </div>
    )
}