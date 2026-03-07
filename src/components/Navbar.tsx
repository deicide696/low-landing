import { Link, useLocation } from 'react-router-dom'
import Logo from "./Logo";
import { useAuth } from '../contexts/AuthContext'
import { LogOut, LayoutDashboard } from 'lucide-react'

interface NavbarProps {
    onOpenDemo?: (source: string) => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
    const { session, signOut } = useAuth()
    const location = useLocation()
    const isLanding = location.pathname === '/'

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex justify-between items-center min-w-0">
                <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
                    <Logo className="w-20" imgClassName="object-contain w-full h-full brightness-0 invert" />
                </Link>

                <nav className="flex items-center gap-6 min-w-0 shrink-0">
                    {isLanding && (
                        <a href="#beneficios" className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Beneficios
                        </a>
                    )}

                    {session ? (
                        <>
                            <Link
                                to="/dashboard"
                                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <button
                                onClick={signOut}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all border border-white/10"
                            >
                                <LogOut className="h-3.5 w-3.5" />
                                <span className="hidden sm:inline">Salir</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                Iniciar sesión
                            </Link>
                            {isLanding && onOpenDemo && (
                                <button
                                    onClick={() => onOpenDemo("Navbar: Demo gratis")}
                                    className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-md transition-all border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                                >
                                    Demo gratis
                                </button>
                            )}
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
