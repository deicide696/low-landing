import Logo from "./Logo";

export default function Navbar() {
    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex justify-between items-center">
                {/* Logo inverted to be white on dark background */}
                <a href="/" className="flex items-center transition-opacity hover:opacity-80">
                    <Logo className="w-20" imgClassName="object-contain w-full h-full brightness-0 invert" />
                </a>

                <nav className="flex items-center gap-6">
                    <a href="#" className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Beneficios
                    </a>
                    <a href="#" className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Cómo funciona
                    </a>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-md transition-all border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        Empezar
                    </button>
                </nav>
            </div>
        </header>
    );
}
