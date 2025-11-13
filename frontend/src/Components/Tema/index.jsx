import { useState, useEffect } from "react";

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
                src={darkMode ? "https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/moon.png" : "https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/sun.png"}
                alt="Alternar tema"
                height={40}
                onClick={() => setDarkMode(!darkMode)}
                className="header-img"
            />
        </div>
    )
}