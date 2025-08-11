import { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";

export default function Register() {
    const [show, setShow] = useState(true);

    function toggleComponent() {
        setShow(!show)
    }
    return(
        <div className="register">
            <Signup style={{ display: show ? 'block': 'none'}}/>
            <Login style={{ display: show ? 'none': 'block'}}/>
            <button onClick={toggleComponent}>Já tem Login? Entre aqui.</button>
        </div>
    )
}