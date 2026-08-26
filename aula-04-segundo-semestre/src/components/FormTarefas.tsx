import type { ActionsProps, TarefaProps } from "../Types"

export default function FormTarefas({ titulo, setor, descricao, add, digit }: ActionsProps & TarefaProps) {

    return (
        <div>
            <form onSubmit={add}>
                <div>
                    <input name="titulo" placeholder="Título" value={titulo} onChange={digit} />
                </div>
                <div>
                    <input name="setor" placeholder="Setor" value={setor} onChange={digit} />
                </div>
                <div>
                    <input name="descricao" placeholder="Descrição" value={descricao} onChange={digit} />
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}