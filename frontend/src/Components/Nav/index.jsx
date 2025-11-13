import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Tema from "../Tema"

import icon2 from "../../images/icon2.png"
import cancel from "../../images/cancel.png"
import link from "../../images/link.png"

import "./nav.css"

export default function Nav({ isOpen, navClose }) {
    
    const [closing, setClosing] = useState(false)
    
    useEffect(() => {
        if (!isOpen) return;
        setClosing(false);
    }, [isOpen]);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            navClose();
        }, 300);
    }
    
    if (!isOpen && !closing) return null
    return(
        <div className={`navbar ${closing ? "closing" : "open"}`}>
            <div className="nav-header" onClick={handleClose}>
                <section className="nav-sec1">
                    <img src={icon2} alt="icone" height={50}/>
                    <h2>paivacritic</h2>
                </section>
                <section className="nav-sec2">
                    <img src={cancel} alt="sair" onClick={navClose} className="navbar-btn" />
                </section>
            </div>
            <div className="navbar-container">
                <Link to="/sobre" className="nav-text"><h3>Sobre</h3><img src="https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/link.png" height={20}/></Link>
                <Link to="/sugestao" className="nav-text"><h3>Sugestões</h3><img src="https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/link.png" height={20}/></Link>
                <Tema />
            </div>
        </div>
    )
}