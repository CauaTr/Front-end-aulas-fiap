import { useEffect, useState } from "react"
import Botao from "./components/Botao"
import Msn from "./components/Msn"

function App() {

  const [cont, setCont] = useState<number>(0)

  const [msn, setMsn] = useState<boolean>(false)

  const aumentar = () => {
    setCont(cont + 1)
  }

  const diminuir = () => {
    setCont(cont - 1)
  }

  useEffect(() => {
    console.log('Apareço sempre que algo á atualizado!')
  })

  useEffect(() => {
    console.log('Só apareço dá primeira vez!')
  }, [])
  useEffect(() => {
    console.log('Só chama quando o Cont for alterado!')
  }, [cont])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-cyan-600 text-white text-center text-3xl p-5">Cabeçalho</div>
      <div className="grow">
        <h1 className="text-3xl text-center">Exemplo de Reaproveitamento</h1>
        <p className="text-lg text-center">Contagem: {cont}</p>
        <div className="text-center">
          <Botao acao={aumentar} type="action">Aumentar</Botao>
          <Botao acao={diminuir} type="danger">Diminuir</Botao>
          <Botao acao={() => setMsn(!msn)} type='mensage'>Mensagem</Botao>
        </div>
        {msn ? <Msn /> : ''}
      </div>
      <div className="bg-black text-white text-center text-xl p-3">Rodapé</div>
    </div>
  )
}

export default App
