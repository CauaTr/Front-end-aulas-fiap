import { useState } from "react"
import Tarefa from "./Tarefa"
import type { TarefaProps } from "../Types"
import FormTarefas from "./FormTarefas"

export default function ListaTarefas() {

    const [tarefas, setTarefas] = useState<TarefaProps[]>([])

    const [tarefa, setTarefa] = useState<TarefaProps>({ titulo: '', setor: '', descricao: '' })

    const addTarefa = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTarefas([...tarefas, tarefa])
        setTarefa({ titulo: '', setor: '', descricao: '' })
    }

    const captura = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTarefa({ ...tarefa, [name]: value })

    }

    return (
        <div className="lista-tarefas">
            <FormTarefas {...tarefa} add={addTarefa} digit={captura} />
            {tarefas.map((t, i) => (<Tarefa key={i} {...t} />))}
        </div>
    )
}