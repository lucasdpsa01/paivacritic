import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

import "./register.css"

export default function Register({ isOpen, onClose }) {
    const [mode, setMode] = useState("signup"); // corrigido "singup" -> "signup"

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal} className="modal">
                
                <button onClick={onClose} style={styles.closeBtn}>X</button>
                <div style={styles.titulo}>
                    <h2>paivacritic</h2>
                </div>

                <div style={styles.switcher} className="switcher">
                    <button
                        onClick={() => setMode("signup")}
                        style={mode === "signup" ? styles.activeBtn : {}}
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={() => setMode("login")}
                        style={mode === "login" ? styles.activeBtn : {}}
                    >
                        Login
                    </button>
                </div>

                <div style={{ marginTop: "1rem" }}>
                    {mode === "signup" ? <Signup /> : <Login />}
                </div>
            </div>
        </div>
    )
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center",
        zIndex: 1000
    },
    titulo: {
        color: "black",
        textAlign: "center"
    },
    modal: {
        background: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        minWidth: "300px",
        position: "relative",
        gap: "30px"
    },
    closeBtn: {
        position: "absolute", top: "10px", right: "10px"
    },
    switcher: {
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center"
    },
    activeBtn: {
        backgroundColor: "#ccc"
    }
};
