import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';
import torneio from '../assets/Torneio.jpg';

function Page3(){
    const { resposta, setResposta, confirmar, pontuação} = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "Homem-Invisível" },
        { letra: "B", texto: "Vovô Gohan" },
        { letra: "C", texto: "Kuririn" },
        { letra: "D", texto: "Jackie Chun (Mestre Kame)" },
    ];

    function avancar(){
        confirmar("pagina3");
        navigate('/page4');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={3} totalQuestoes={10} />

            <Pergunta
                numero={3}
                imagem={torneio}
                value={"Qual foi o primeiro oponente que derrotou o rabo de Goku durante um Torneio de Artes Marciais na infância?"}
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
export default Page3;