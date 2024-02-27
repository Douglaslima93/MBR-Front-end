import React from "react";
import './Login.css';
import { Link } from "react-router-dom"; 
import { useState } from "react"; 

const Login = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const handleChange = (event) => {
        setNomeUsuario(event.target.value);
    };

    return (
        <div className="login">
        <h1>Nome</h1>
        <input type="text" value={nomeUsuario} onChange={handleChange} placeholder="Digite o seu nome:"/>
        <Link to={'questions/:id'}><input className="acessar" type="submit" value="Acessar" /></Link>
        </div>
    )
}

export default Login;