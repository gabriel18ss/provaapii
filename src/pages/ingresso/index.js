import {useState} from "react"
import axios from "axios"
export default function index() {

    const [qtdInteiras, setqtdint] = useState(0);
    const [qtdMeias, setqtdmeias] = useState(0);
    const [diaSemana, setdiadasemana] = useState('');
    const [nacionalidade, setnacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressoCinema',
         {
         qtdInteiras: qtdInteiras,
         qtdMeias: qtdMeias,
         diaSemana: diaSemana,
         nacionalidade: nacionalidade
         })
            setTotal(resp.data.total);
    }
    return (
        <main>
        <h1>ingresso</h1>
            <div> qtd.inteiros: <input type='text' value={qtdInteiras} onChange={e =>setqtdint(Number(e.target.value))}/> </div>
            <div> qtd.meias: <input type='text' value={qtdMeias} onChange={e => setqtdmeias(Number(e.target.value))}/> </div>
            <div> dia da semana: < input type='text' value={diaSemana} onChange={e => setdiadasemana(e.target.value)}/></div>
            <div> nacionalidade: <input type='text' value={nacionalidade} onChange={e => setnacionalidade(e.target.value)}/></div>
            <div>
                <button onClick={calcular}>calcular</button>
            </div>
            <div>
                o total é R$: {total}
            </div>
        </main>
    )
}