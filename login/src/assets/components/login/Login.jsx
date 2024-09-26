import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Envio", { username, password });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <FaUser className="icon" />
                    <input
                        type="email"
                        placeholder='Digite seu e-mail'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-field">

                    <FaLock className="icon" />
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit">Submit</button>
                <div className="singup-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
