import api from "../../../services/api";
import { useState } from "react";
import "../Login/login.css"

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [erros, setErros] = useState({});
    const [sucesso, setSucesso] = useState(false);

    async function cadastrar(e) {
        e.preventDefault();
        setErros({});
        setSucesso(false);

        try {
            await api.post("/users", {
                name,
                email,
                password,
                date_of_birth: dateOfBirth,
            });
            setSucesso(true);
        } catch (err) {
            setErros(err.response?.data?.errors || {});
        }
    }

return (
    <div className="login">
        <p>Comece com uma conta do Paivacritic para avaliar jogos!</p>
        <form className="form-register" onSubmit={cadastrar}>
            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="mytext" />
            {erros.name && <p>{erros.name[0]}</p>}

            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {erros.email && <p>{erros.email[0]}</p>}

            <label>Data de Nascimento</label>
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            {erros.date_of_birth && <p>{erros.date_of_birth[0]}</p>}

            <label>Senha</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {erros.password && <p>{erros.password[0]}</p>}

            <button>Criar Conta</button>
            {sucesso && <p>Conta criada! Agora é só fazer login.</p>}
        </form>
    </div>
)
}
