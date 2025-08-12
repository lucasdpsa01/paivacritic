export default function Login() {
    return (
        <div style={styles.login}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
        </div>
    )
}
const styles = {
    login: {
        display: "flex",
        flexDirection: "column"
    }
}