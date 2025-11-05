import { Link } from "react-router-dom"
import { useState } from "react"
import Tema from "../Tema"
import Nav from "../Nav"

import hamburger from "../../svg/hamburger.svg"
import icon2 from "../../images/icon2.png"

import "./header.css"

export default function Header() {
    const [isNav, setIsNav] = useState(false);

    return (
        <header className="header">
            <Link className="titulo" to="/">
                <img src={icon2} alt="logo" height={50}/>
                <h1>paivacritic</h1>
            </Link>

            <nav className="nav">
                <ul>
                    <li>
                        <Link className="link" to="/sobre"><p>Sobre</p></Link>
                    </li>
                    <li>
                        <Link className="link" to="/sugestao"><p>Sugestões</p></Link>
                    </li>
                    <li>
                        <Tema />
                    </li>
                </ul>
            </nav>

            <Nav 
                isOpen={isNav}
                navClose={() => setIsNav(false)}
            />

            <button
                className="hambuger"
                onClick={() => setIsNav(true)}
                aria-label="Abrir menu"
            >
                <img src={hamburger} alt="ícone de menu"/>
            </button>
        </header>
    );
}