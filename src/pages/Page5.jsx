import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';

function Page5(){
    const { resposta, setResposta, confirmar, pontuação} = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "Olibu" },
        { letra: "B", texto: "Pikkon (Paikuhan)" },
        { letra: "C", texto: "Torbie" },
        { letra: "D", texto: "Maraikoh" },
    ];

    function avancar(){
        confirmar("pagina5");
        navigate('/page6');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={5} totalQuestoes={10} />

            <Pergunta
                numero={5}
                value={"No Torneio de Artes Marciais do Outro Mundo, qual guerreiro Goku enfrentou na grande final antes de a luta ser anulada por ambos tocarem o teto?"}
            />

            <div className="flex flex-col items-center gap-3 px-6 mt-6">
                {opcoes.map((op) => (
                    <Opção
                        key={op.letra}
                        letra={op.letra}
                        value={`${op.letra}) ${op.texto}`}
                        selecionado={resposta === `${op.letra}) ${op.texto}`}
                        onClick={() => setResposta(`${op.letra}) ${op.texto}`)}
                    />
                ))}
            </div>

            <Avançar disabled={resposta === null} onClick={() => avancar()}/>
        </div>
    )
}
export default Page5;