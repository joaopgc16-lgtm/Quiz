function Header({ pontuacao, questaoAtual, totalQuestoes }) {
    const progresso = (questaoAtual / totalQuestoes) * 100;

    return (
        <div className="max-w-4xl mx-auto pt-8 px-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <h1 className="font-bangers text-3xl text-orange-400 tracking-wide">DBZ QUIZ</h1>
                </div>
                <div className="bg-gray-900 border border-orange-500 rounded-full px-4 py-1 flex items-center gap-2">
                    <span className="text-orange-400">🏆</span>
                    <span className="font-semibold text-orange-300">{pontuacao} PTS</span>
                </div>
            </div>

            <div className="flex justify-between items-center mb-1">
                <span className="text-orange-400 font-bold text-sm tracking-wider">NÍVEL DE PODER</span>
                <span className="text-gray-400 text-sm">{questaoAtual} / {totalQuestoes}</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500"
                    style={{ width: `${progresso}%` }}
                />
            </div>
        </div>
    );
}
export default Header;