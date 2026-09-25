function Opção({ letra, value, selecionado, onClick, correta, mostrarResultado }) {
    let estilo = "bg-gray-800 border-gray-700 hover:bg-gray-700";
    let badgeCor = "bg-gray-600";

    if (mostrarResultado) {
        if (correta) {
            estilo = "bg-green-600/20 border-green-500";
            badgeCor = "bg-green-500";
        } else if (selecionado && !correta) {
            estilo = "bg-red-600/20 border-red-500";
            badgeCor = "bg-red-500";
        }
    } else if (selecionado) {
        estilo = "bg-orange-500/20 border-orange-500";
        badgeCor = "bg-orange-500";
    }

    return (
        <button
            onClick={onClick}
            disabled={mostrarResultado}
            className={`w-full max-w-2xl flex items-center gap-3 border-2 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${estilo}`}
        >
            <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-white text-sm ${badgeCor}`}>
                {mostrarResultado && correta ? "✓" : mostrarResultado && selecionado && !correta ? "✕" : letra}
            </span>
            <span className="text-white font-medium text-left">{value}</span>
        </button>
    );
}
export default Opção;