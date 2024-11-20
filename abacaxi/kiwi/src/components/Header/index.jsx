import { Link } from "react-router-dom"

import "./header.css"

export default function Header() {
    return(
        <div className="header">
            <Link className="link" to='/'><h1>Paivacritic</h1></Link>
            <div className="header-links">
                <Link className="link" to='/about'>About Us</Link>
                <Link className="link" to='/sugestion'>Sugestões</Link>
            </div>
        </div>
    )
}