import React, {useState, useEffect} from "react";
import './Questions.css';
import NavBar from "../components/NavBar";
import axios from 'axios';


const Questions = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list')
        .then(response => setData(response.data))   
    }, []); 


    return (
        <div>
            <NavBar/>
            <div>  
            </div>
            <div className="quadro-perguntas">
            <p className="perguntas">{data?.data[0]?.pergunta}</p>
            <button>{data?.data[0]?.resposta_correta}</button>
            <button>{data?.data[0]?.resposta_errada1}</button>
            <button>{data?.data[0]?.resposta_errada2}</button>
            </div>
        </div>
    )
}

export default Questions;