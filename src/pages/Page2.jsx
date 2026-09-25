import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';
import androides from '../assets/Androides.jpg'

function Page2(){
    const { resposta, setResposta, confirmar, pontuação} = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "3 (Dezessete, Dezoito e Dezesseis)" },
        { letra: "B", texto: "4 (Dezenove, Vinte, Dezessete e Dezoito)" },
        { letra: "C", texto: "5 (Dezenove, Vinte, Dezessete, Dezoito e Dezesseis)" },
        { letra: "D", texto: "6 (Dezenove, Vinte, Dezessete, Dezoito, Dezesseis e Cell)" },
    ];

    function avancar(){
        confirmar("pagina2");
        navigate('/page3');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={2} totalQuestoes={10} />

            <Pergunta
                numero={2}
                imagem={androides}
                value={"Na saga Cell, quantos androides criados pelo Dr. Gero saíram despertos de suas cápsulas no laboratório principal da linha do tempo oficial?"}
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
export default Page2