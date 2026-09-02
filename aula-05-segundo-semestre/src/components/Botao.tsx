type Props = {
    children: React.ReactNode
    acao: () => void
    type: string
}

export default function Botao({ children, acao, type }: Props) {



    if (type === 'action') {
        return (
            <div>
                <button onClick={acao} className="bg-blue-600 text-white text-2xl px-2 rounded-md">{children}</button>
            </div>
        )
    } else if (type === 'danger') {
        return (
            <div>
                <button onClick={acao} className="bg-red-600 text-white text-2xl px-2 rounded-md">{children}</button>
            </div>
        )
    } else if (type === 'mensage') {
        return (
            <div>
                <button onClick={acao} className="bg-yellow-600 text-black text-2xl px-2 rounded-md">{children}</button>
            </div>
        )
    }
}