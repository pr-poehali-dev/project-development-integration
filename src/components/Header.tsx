export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-3xl tracking-widest" style={{ fontFamily: "'Cinzel', serif", textShadow: "0 1px 8px rgba(0,0,0,0.25)" }}>Olympos</div>
        <nav className="flex gap-8">
          <a
            href="#gods"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm tracking-wider"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Боги
          </a>
          <a
            href="#history"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm tracking-wider"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            История
          </a>
          <a
            href="#modern"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm tracking-wider"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Современность
          </a>
        </nav>
      </div>
    </header>
  )
}