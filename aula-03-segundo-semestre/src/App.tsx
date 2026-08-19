import Alunos from "./components/Alunos"
import Cabecalho from "./components/Cabecalho"
import type { DadosAlunos } from "./types"

export default function App() {

  let nome: string = "Luís"

  const idade: number = 18

  const matricula: boolean = true

  const titulo: string = "Aula React - Typescript"

  const curso: string = "ADS"

  const alerta = () => alert("Faça a sua Matrícula!")

  const projeto = "Finalizado"

  const alunos: DadosAlunos[] = [
    { nome: "Jones", idade: 19 },
    { nome: "Maria", idade: 20 },
    { nome: "Emanuel", idade: 18 },
    { nome: "Martha", idade: 21 }
  ]

  return (
    <div>
      <Cabecalho titulo={titulo} curso={curso} alerta={alerta} projeto={projeto}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Cabecalho>
      <p>O nome é {nome}, ele tem {idade} e sua matrícula está {matricula ? "ativa" : "cancelada"}</p>
      <Alunos />
    </div>
  )
}

