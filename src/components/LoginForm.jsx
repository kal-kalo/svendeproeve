import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        console.log('clicked submit')
        e.preventDefault()

        await login(username, password)
    }

    return (
        <form className="login-form"  onSubmit={handleSubmit}>
            <h3 className="text-3xl">Log In</h3>


            <input
                required
                placeholder="brugernavn"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <input
                required
                className="mb-2 mt-2"
                placeholder="adgangskode"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading} className={`primary-btn ${isLoading? "grayout": ""}`} >{isLoading? "Logging in...":"Log in"}</button>
            
            {error && <div className="error"> error: {error}</div>}
            
        </form>
    )
}
