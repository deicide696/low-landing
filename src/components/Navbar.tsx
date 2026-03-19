import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from "./Logo"
import { useAuth } from '../contexts/AuthContext'
import { LogOut, LayoutDashboard, Menu, X } from 'lucide-react'

interface NavbarProps {
    onOpenDemo?: (source: string) => void
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
    const { session, signOut } = useAuth()
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isProductLanding = location.pathname === '/auxiliar-administrativo'
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex justify-between items-center min-w-0">
                <Link to="/" className="flex items-center transition-opacity hover:opacity-80" onClick={closeMenu}>
                    <Logo className="w-20" imgClassName="object-contain w-full h-full brightness-0 invert" />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-6 min-w-0 shrink-0">
                    {isHome && (
                        <>
                            <a href="#productos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Productos
                            </a>
                            <a href="#contacto" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                Contacto
                            </a>
                        </>
                    )}
                    {isProductLanding && (
                        <a href="#beneficios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Beneficios
                        </a>
                    )}

                    {session ? (
                        <>
                            <Link
                                to="/dashboard"
                                className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <button
                                onClick={signOut}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all border border-white/10"
                            >
                                <LogOut className="h-3.5 w-3.5" />
                                Salir
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                Iniciar sesión
                            </Link>
                            {onOpenDemo && (
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

                {/* Mobile hamburger button */}
                <button
                    className="sm:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile drawer */}
            <div className={`sm:hidden absolute top-24 left-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-white/10 transition-all duration-200 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <nav className="flex flex-col px-6 py-4 gap-1">
                    {isHome && (
                        <>
                            <a
                                href="#productos"
                                onClick={closeMenu}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-3 border-b border-white/5"
                            >
                                Productos
                            </a>
                            <a
                                href="#contacto"
                                onClick={closeMenu}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-3 border-b border-white/5"
                            >
                                Contacto
                            </a>
                        </>
                    )}
                    {isProductLanding && (
                        <a
                            href="#beneficios"
                            onClick={closeMenu}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-3 border-b border-white/5"
                        >
                            Beneficios
                        </a>
                    )}

                    {session ? (
                        <>
                            <Link
                                to="/dashboard"
                                onClick={closeMenu}
                                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors py-3 border-b border-white/5"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <button
                                onClick={() => { signOut(); closeMenu() }}
                                className="flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors py-3 text-left"
                            >
                                <LogOut className="h-4 w-4" />
                                Salir
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-3 border-b border-white/5"
                            >
                                Iniciar sesión
                            </Link>
                            {onOpenDemo && (
                                <button
                                    onClick={() => { onOpenDemo("Navbar Mobile: Demo gratis"); closeMenu() }}
                                    className="mt-3 w-full bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/10"
                                >
                                    Demo gratis
                                </button>
                            )}
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}
