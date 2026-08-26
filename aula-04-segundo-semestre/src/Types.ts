import type React from "react"

export type TarefaProps = {
    titulo: string,
    setor: string,
    descricao: string
}

export type RemoveProps = {
    remove: (num:string) =>void
}

export type ActionsProps = {
    add: (e:React.SubmitEvent<HTMLFormElement>)=>void,
    digit: (e:React.ChangeEvent<HTMLInputElement>)=>void
}