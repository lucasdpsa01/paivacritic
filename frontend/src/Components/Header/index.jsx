import { Link } from "react-router-dom"
import { useState } from "react"
import Register from "../Register"
import Tema from "../Tema"

import hamburger from "../../svg/hamburger.svg"
import icon2 from "../../images/icon2.png"

import "./header.css"
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="header">
            <Link className="titulo" to="/">
                <img src={icon2} alt="logo" height={50}/>
                <h1>paivacritic</h1>
            </Link>

            <nav>
                <ul className={`nav ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link className="link" to="/sobre"><p>Sobre</p></Link>
                    </li>
                    <li>
                        <Link className="link" to="/sugestao"><p>Sugestões</p></Link>
                    </li>
                    <li>
                        <button onClick={() => setIsModalOpen(true)} className="btn-register">Register</button>
                    </li>
                    <li>
                        <Tema />
                    </li>
                </ul>
            </nav>

            <Register
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            
            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menu"
            >
                <img src={hamburger} alt="Ícone do menu" height={50}/>
            </button>
        </header>
    );
}