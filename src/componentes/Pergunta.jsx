function Pergunta({ value, imagem, numero }) {
    return (
        <div className="flex flex-col bg-gray-900 justify-center m-auto max-w-3xl p-6 rounded-2xl border border-orange-500/40 shadow-lg shadow-orange-500/10 mt-6">
            <div className="flex justify-start mb-3">
                <span className="bg-orange-500 text-gray-950 font-bold text-xs px-3 py-1 rounded-full tracking-wider">
                    QUESTÃO {numero}
                </span>
            </div>

            {imagem && (
                <div className="relative rounded-2xl overflow-hidden mb-4">
                    <img src={imagem} alt="Imagem da questão" className="h-64 w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400" />
                </div>
            )}

            <h1 className="text-white text-xl font-semibold leading-snug">{value}</h1>
        </div>
    );
}
export default Pergunta;