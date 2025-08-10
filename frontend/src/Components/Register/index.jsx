import { useState, useEffect } from "react";
import Signup from "./Singup";
import Login from "./Login";

export default function Register() {
    const [login, setlogin] = useState(false);
    return(
        <div className="register">
            <Register />
        </div>
    )
}