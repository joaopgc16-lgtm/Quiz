function Avançar({ disabled, onClick }) {
    return (
        <div className="flex justify-center max-w-2xl mx-auto pb-16 pt-4">
            <button
                disabled={disabled}
                onClick={onClick}
                className={`font-bangers text-lg tracking-wide px-8 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                    disabled
                        ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 shadow-lg shadow-orange-500/30"
                }`}
            >
                AVANÇAR <span>›</span>
            </button>
        </div>
    );
}
export default Avançar;