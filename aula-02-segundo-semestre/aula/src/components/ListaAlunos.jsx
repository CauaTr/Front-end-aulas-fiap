import { useState } from "react"
import style from "./ListaAlunos.module.css"

export default function ListaAlunos() {

    const [cont, setCont] = useState(0)
    let cont2 = 0

    const aumentar = () => {

        setCont(cont + 5)

        cont2 += 5
        console.log(cont2)
    }

    return (
        <div>
            <h2 className={style.subtitulo}>Lista Alunos</h2>
            <p>Contagem: {cont}</p>
            <p>Contagem2: {cont2}</p>
            <button onClick={aumentar}>Aperte</button>
            <ul>
                <li>João</li>
                <li>Pedro</li>
                <li>Tiago</li>
                <li>Mateus</li>
            </ul>
        </div>
    )
}