import React, {useState, useEffect} from "react";
import './Questions.css';
import NavBar from "../components/NavBar";
import axios from 'axios';


const Questions = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list')
        .then(response => setData(response.data))
        //console.log(data.data[0].pergunta)
        /*
        <p className="pergunta">{data.data[0].pergunta}</p>
            <button type="submit">{data.data[0].resposta_correta}</button>
            <button type="submit">{data.data[0].resposta_errada1}</button>
            <button type="submit">{data.data[0].resposta_errada2}</button>
        */
    }, []);

    return (
        <div>
            <NavBar/>
            <div>
            
            </div>
        </div>
    )
}

export default Questions;