import ListaAlunos from "./components/ListaAlunos";
import react from "./assets/react.svg";

function App() {

  const aluno = "Luís";

  const alunosNovos = ["Lucas", "Ana", "Cauã"]
  return (
    <>
      <div>
        <img src="favicon.svg" alt="Logo Vite" />
        <h1>Aula de Introdução do REACT</h1>
        <img src={react} alt="react" />
        <p>O nome do aluno é {aluno}</p>
      </div>
      <br />
      <div>
        <h2>Primeira Aula</h2>
      </div>

      <ListaAlunos aluno={aluno} novos={alunosNovos} />
    </>
  )



}

export default App