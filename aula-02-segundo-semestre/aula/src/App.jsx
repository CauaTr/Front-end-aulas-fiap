import ListaAlunos from "./components/ListaAlunos"

export default function App() {

  const titulo = {
    color: "red"
  }


  return (
    <div style={{
      border: "3px solid blue",
      padding: "20px"
    }}>
      <h1 style={titulo}>Aula CSS e UseState</h1>
      <ListaAlunos />
    </div>
  )
}