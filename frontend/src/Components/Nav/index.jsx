import { Link } from "react-router-dom"
import Tema from "../Tema"
import cancel from "../../images/cancel.png"

import "./nav.css"

export default function Nav({ isOpen, navClose }) {
    if (!isOpen) return null

    return(
        <div className="navbar">
            <div className="navbar-container">
                <img src={cancel} alt="sair" onClick={navClose} className="navbar-btn" />
                <Link to="/sobre"><h2>Sobre</h2></Link>
                <Link to="/sugestao"><h2>Sugestões</h2></Link>
                <Tema />
            </div>
        </div>
    )
}