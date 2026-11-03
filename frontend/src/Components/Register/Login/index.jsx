import api from "../../../services/api";
import { useState } from "react";
import "./login.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [erro, setErro] = useState("");


    async function entrar(e) {
        e.preventDefault();
        setErro("");

        try{
            const { data } = await api.post("/login", { email, password });
            alert("Logado como " + data.user.name);
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao entrar ");
        }
    }
    
    return (
        <div className="login">
            <p>Seja bem vindo de volta!</p>
            <form className="form-register" onSubmit={entrar}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <label>Senha</label>
                <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)}/>
                <button type="submit">Entrar</button>
                {erro && <p>{erro}</p>}
            </form>
        </div>
    )
}
