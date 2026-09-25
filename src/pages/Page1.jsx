import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';
import teletransporte from "../assets/Teletransporte.webp";

function Page1(){
    const { resposta, setResposta, confirmar, pontuação } = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "Planeta Yardrat", correta: false },
        { letra: "B", texto: "Planeta Metamoru", correta: false },
        { letra: "C", texto: "Planeta Cereal", correta: false },
        { letra: "D", texto: "Planeta Namekusei", correta: true },
    ];

    function avancar(){
        confirmar("pagina1");
        navigate('/page2');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={1} totalQuestoes={7} />

            <Pergunta
                numero={1}
                imagem={teletransporte}
                value={"Qual é o nome do planeta onde Goku aprendeu a técnica do Teletransporte (Shunkan Ido)?"}
            />

            <div className="flex flex-col items-center gap-3 px-6 mt-6">
                {opcoes.map((op) => (
                    <Opção
                        key={op.letra}
                        letra={op.letra}
                        value={`${op.letra}) ${op.texto}`}
                        selecionado={resposta === `${op.letra}) ${op.texto}`}
                        correta={op.correta}
                        mostrarResultado={false}
                        onClick={() => setResposta(`${op.letra}) ${op.texto}`)}
                    />
                ))}
            </div>

            <Avançar disabled={resposta === null} onClick={() => avancar()}/>
        </div>
    )
}
export default Page1