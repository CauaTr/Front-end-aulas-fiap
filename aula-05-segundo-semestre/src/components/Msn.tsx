import { useEffect } from "react"

export default function Msn() {

    useEffect(() => {

        return () => console.log('A mensagem foi apagada!')
    }, [])

    return (
        <div className="border-2 border-red-400 p-2">
            <p className="text-2xl">Mensagem enviada!</p>
        </div>
    )
}