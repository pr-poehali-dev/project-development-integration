export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Просветительский проект об античном искусстве</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl md:leading-tight text-white mb-4" style={{ fontFamily: "'Cinzel', serif", textShadow: "0 2px 16px rgba(0,0,0,0.25)", letterSpacing: "0.04em" }}>
          Боги Олимпа
          <br />
          <span className="text-5xl md:text-6xl font-normal opacity-90">сквозь века</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          От мраморных статуй Древней Греции до современных интерпретаций — как менялся образ олимпийских богов,
          что с ними сделало христианство и почему они живут в культуре по сей день.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Узнать больше
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Начать читать
          </button>
        </div>
      </div>
    </main>
  )
}