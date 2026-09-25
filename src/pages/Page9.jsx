import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';

function Page9(){
    const { resposta, setResposta, confirmar, pontuação} = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "Goku" },
        { letra: "B", texto: "Yajirobe" },
        { letra: "C", texto: "Gohan" },
        { letra: "D", texto: "Kuririn" },
    ];

    function avancar(){
        confirmar("pagina9");
        navigate('/page10');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={9} totalQuestoes={10} />

            <Pergunta
                numero={9}
                value={"Quem foi o responsável por cortar a cauda de Vegeta quando ele estava transformado em Oozaru (Macaco Gigante) na Terra?"}
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
export default Page9;