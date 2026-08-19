type DadosCabecalho = {
    titulo: string,
    curso: string,
    alerta: () => void,
    projeto: "Em andamento" | "Finalizado",
    children: React.ReactNode
}

type DadosProjeto = {
    alerta: () => void,
    projeto: "Em andamento" | "Finalizado"
}

export default function Cabecalho({ titulo, curso, alerta, projeto, children }: DadosCabecalho & DadosProjeto) {


    return (
        <div>
            <h1>{titulo}</h1>
            <p>Curso: {curso}</p>
            <p>Situação do projeto: {projeto}</p>
            <button onClick={alerta}>Alerta</button>
            {children}
        </div>
    )
}