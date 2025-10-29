import { useState, useEffect } from "react";
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"

import "./tema.css"

export default function Tema() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === "dark"
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="tema">
            <img
                src={darkMode ? moon : sun}
                alt="Alternar tema"
                height={40}
                onClick={() => setDarkMode(!darkMode)}
                className="header-img"
            />
        </div>
    )
}