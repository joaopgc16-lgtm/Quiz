import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';

function Page6(){
    const { resposta, setResposta, confirmar, pontuação} = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "Exatamente 1 ano para cada um juntos" },
        { letra: "B", texto: "1 ano para Vegeta e 2 anos para Trunks" },
        { letra: "C", texto: "Quase 1 ano inteiro de permanência contínua" },
        { letra: "D", texto: "2 anos para Vegeta e 1 ano para Trunks" },
    ];

    function avancar(){
        confirmar("pagina6");
        navigate('/page7');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={6} totalQuestoes={10} />

            <Pergunta
                numero={6}
                value={"Quantos anos se passaram dentro da Sala do Tempo para Trunks do Futuro e Vegeta durante o primeiro treinamento deles para enfrentar Cell?"}
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
export default Page6;