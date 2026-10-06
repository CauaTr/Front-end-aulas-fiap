import { createContext, useState, useEffect } from "react"

type User = {
  email: string,
  password: string
}

type AuthContextType = {
    user: User | null,
    signed: boolean,
    signin: (email: string, password: string) => string | void,
    signup: (email: string, password: string) => string | void,
    signout: () => void
}

type AuthProvider = {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({children}: AuthProvider) => {

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const userToken = localStorage.getItem('user_token')
        const userStorage = localStorage.getItem('user_storage')

        if(userToken && userStorage){
            const users: User[] = JSON.parse(userStorage)
            const tokenData = JSON.parse(userToken)
            const hasUser = users.find((u) => u.email === tokenData.email)
            if (hasUser) setUser(hasUser)
        }
    }, [])

    //1 - Verifica se já existe um usuário com o mesmo e-mail, e se não tiver cadastra o novo usuário
    const signup = (email: string, password: string): string | void => {

        const userStorage = JSON.parse(localStorage.getItem('user_db') || '[]' ) as User[]
        const hasUser = userStorage.find((user) => user.email === email)

        if(hasUser) {return "Usuário já cadastrado"}

        const newUser = [...userStorage, {email, password}]
        localStorage.setItem('user_db', JSON.stringify(newUser))
    }

    //2 - Verifica se o usuário digitado existe e em seguida verifica se a senha digitada é a mesma que a cadastrada, caso seja, cria um token e salva no localStorage
    const signin = (email: string, password: string): string | void => {

        const userStorage = JSON.parse(localStorage.getItem('user_db') || '[]' ) as User[]
        const hasUser = userStorage.find((user) => user.email === email)
        if(hasUser){
            if(hasUser.password === password){
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem('user_token', JSON.stringify({email, token}))
                setUser({email, password})
                return
            } else{
                return "Usuário ou senha incorretos"
            }
        }
    }

    // 3 - Apaga os dados do State User e remove o token do localStorage
    const signout = () => {
        setUser(null)
        localStorage.removeItem('user_token')
    }

    return(
        <AuthContext.Provider value={{user, signed: !!user, signin, signup, signout}}>
            {children}
        </AuthContext.Provider>
    )
}