export default function ListaAlunos(props) {

    return (
        <div>
            <h2>Lista de Alunos</h2>

            <ul>
                <li>Zazinho</li>
                <li>Huguinho</li>
                <li>Luizinho</li>
                <li>{props.aluno}</li>
                <li>{props.novos[0]}</li>
                <li>{props.novos[1]}</li>
                <li>{props.novos[2]}</li>
            </ul>
        </div>
    )

}