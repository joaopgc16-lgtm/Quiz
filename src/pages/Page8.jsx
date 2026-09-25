import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Opção from "../componentes/Opção.jsx";
import Avançar from "../componentes/Avançar.jsx"
import Pergunta from '../componentes/Pergunta.jsx';
import Header from '../componentes/Header.jsx';

function Page8(){
    const { resposta, setResposta, confirmar, pontuação} = useOutletContext();
    const navigate = useNavigate();

    const opcoes = [
        { letra: "A", texto: "Exatamente 5.000" },
        { letra: "B", texto: "Mais de 8.000" },
        { letra: "C", texto: "Exatamente 8.000" },
        { letra: "D", texto: "Mais de 5.000" },
    ];

    function avancar(){
        confirmar("pagina8");
        navigate('/page9');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Header pontuacao={pontuação} questaoAtual={8} totalQuestoes={10} />

            <Pergunta
                numero={8}
                value={"Na saga dos Saiyajins, qual é o nível de poder oficial de Goku registrado pelo rastreador de Nappa logo após ele ressuscitar e chegar para enfrentar Vegeta?"}
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
export default Page8;