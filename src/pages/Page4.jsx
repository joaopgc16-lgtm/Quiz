import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';
import majin from '../assets/Majin.jpg';

function Page4(){
    const { resposta, setResposta, confirmar, pontuação} = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "Gotenks, Piccolo, Gohan" },
        { letra: "B", texto: "Gohan, Gotenks, Piccolo" },
        { letra: "C", texto: "Piccolo, Gotenks, Gohan" },
        { letra: "D", texto: "Gotenks, Gohan, Piccolo" },
    ];

    function avancar(){
        confirmar("pagina4");
        navigate('/page5');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={4} totalQuestoes={10} />

            <Pergunta
                numero={4}
                imagem={majin}
                value={"Na saga Majin Boo, qual foi a ordem exata de guerreiros que o demônio absorveu cronologicamente para mudar de forma?"}
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
export default Page4;