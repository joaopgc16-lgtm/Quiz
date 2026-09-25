import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';

function Final(){
    const { pontuação } = useOutletContext();
    const navigate = useNavigate();
    const total = 10;
    const precisao = Math.round((pontuação / total) * 100);

    function getRank(){
        if (pontuação === total) {
            return {
                titulo: "ULTRA INSTINTO",
                mensagem: `Perfeito! Você acertou todas as ${total} perguntas. Um verdadeiro guerreiro Z!`,
                cor: "from-purple-500 to-blue-400",
                emoji: "⚡"
            };
        } else if (pontuação >= 7) {
            return {
                titulo: "SUPER SAIYAJIN",
                mensagem: `Muito bem! Você acertou ${pontuação} de ${total}. Seu poder de luta é impressionante.`,
                cor: "from-yellow-400 to-orange-500",
                emoji: "🔥"
            };
        } else if (pontuação >= 4) {
            return {
                titulo: "GUERREIRO Z",
                mensagem: `Nada mal! Você acertou ${pontuação} de ${total}. Continue treinando.`,
                cor: "from-orange-500 to-red-500",
                emoji: "💪"
            };
        } else {
            return {
                titulo: "APRENDIZ SAIYAJIN",
                mensagem: `Você acertou ${pontuação} de ${total}. Ainda há muito treino pela frente.`,
                cor: "from-gray-500 to-gray-600",
                emoji: "🌱"
            };
        }
    }

    const rank = getRank();

    function jogarNovamente(){
        navigate('/');
    }

    return(
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-gray-900 border border-orange-500/40 rounded-2xl p-8 text-center shadow-lg shadow-orange-500/10">

                <div className="text-5xl mb-3">{rank.emoji}</div>

                <h1 className={`font-bangers text-4xl tracking-wide mb-2 bg-gradient-to-r ${rank.cor} bg-clip-text text-transparent`}>
                    {rank.titulo}
                </h1>

                <p className="text-gray-300 mb-6">{rank.mensagem}</p>

                <div className="bg-gray-950 border border-orange-500 rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6">
                    <span className="text-orange-400">🏆</span>
                    <span className="font-semibold text-orange-300">{pontuação} / {total} PTS</span>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>PRECISÃO</span>
                        <span>{precisao}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${rank.cor} transition-all duration-700`}
                            style={{ width: `${precisao}%` }}
                        />
                    </div>
                </div>

                <button
                    onClick={jogarNovamente}
                    className="font-bangers text-lg tracking-wide px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30"
                >
                    JOGAR NOVAMENTE
                </button>
            </div>
        </div>
    )
}
export default Final;