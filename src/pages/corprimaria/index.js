import { useState } from "react"
import axios from "axios"


export default function index() {
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarcorprimaria(){
       const resp = await axios.get('http://localhost:5000/dia2/CorPrimaria/:' + cor);
        
       if (resp.data.primaria == true) {
           setResposta('SIM');
       } else {
           setResposta('NÃO');
       }
    }
    return (
        <main>
                <h1>cor primaria</h1>
                <div>
                    Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
                </div>
                <div>
                    <button onClick={verificarcorprimaria}> verificar </button>
                </div>
                <div>
                    é cor primaria {resposta}
                </div>
        </main>
    )
}