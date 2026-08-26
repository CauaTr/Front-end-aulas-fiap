import type { TarefaProps } from "../Types"

export default function Tarefa({ titulo, setor, descricao }: TarefaProps) {

    

    return (
        <div className="tarefa">
            <h2>{titulo}</h2>
            <p>Para: {setor}</p>
            <p>Fazer: {descricao}</p>
        </div>
    )
}