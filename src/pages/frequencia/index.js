import axios from "axios";
import { useState } from "react"

export default function index() {
    const[texto, setTexto] = useState('');
    const[caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarfreq() {
    const resp = await axios.get(`http://localhost:5000/dia2/freqCaracterer/ ${texto}/${caractere}`)
        setResposta(resp.data.freq);
    }
    return (
        <main>
        <h1> frequencia </h1>

            <div>texto : <input type='text' value={texto} onChange={E => setTexto(E.target.value)}/></div>
            <div>caractere : <input type='text' value={caractere} onChange={E => setCaractere(E.target.value)}/></div>
            <div><button onClick={verificarfreq}>verificar frequencia</button></div>
            <div>frequencia: {resposta}</div>
        </main>
    )
}