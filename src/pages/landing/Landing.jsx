import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const Landing = () => {
    const { dark, toggleTheme } = useTheme()

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">

            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <span className="font-bold text-lg">Comandio</span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-slate-500 dark:text-slate-400 hover:text-orange-500 transition-colors"
                    >
                        {dark ? '☀️' : '🌙'}
                    </button>
                    <Link to="/login" className="text-sm text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">
                        Iniciar sesión
                    </Link>
                    <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                        Prueba gratis
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium px-3 py-1 rounded-full mb-6">
                    7 días gratis · Sin tarjeta de crédito
                </span>
                <h1 className="text-5xl font-bold leading-tight mb-6">
                    Organizá tu restaurante.<br />
                    <span className="text-orange-500">Sin complicaciones.</span>
                </h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                    Comandas digitales, menú QR, reportes y control de tu negocio desde un solo lugar. Sin reemplazar lo que ya funciona.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                        Empezar prueba gratis
                    </Link>
                    <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 font-medium transition-colors">
                        Ver cómo funciona →
                    </a>
                </div>
            </section>

            {/* Pilares */}
            <section id="features" className="bg-slate-50 dark:bg-slate-800/50 py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Todo lo que tu negocio necesita</h2>
                    <p className="text-center text-slate-500 dark:text-slate-400 mb-12">Sin tocar tu sistema de cobro. Sin complicar lo que ya funciona.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">💬</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Comunicación interna</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Comandas digitales en tiempo real. El mozo toma el pedido, la cocina lo recibe al instante. Sin papel, sin errores.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Visibilidad del negocio</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Reportes de ventas, platos más pedidos y rendimiento del personal. Controlá tu negocio aunque no estés ahí.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Presencia digital</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Menú digital con QR en cada mesa. Actualizá precios al instante y cumplí con la normativa de alérgenos de la UE.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Precios */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Precios simples y transparentes</h2>
                    <p className="text-center text-slate-500 dark:text-slate-400 mb-12">Comenzá gratis. Pagá solo si te convence.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-lg mb-1">Básico</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Para empezar</p>
                            <div className="text-4xl font-bold mb-1">€29<span className="text-lg font-normal text-slate-400">/mes</span></div>
                            <p className="text-slate-400 text-sm mb-6">1 local · hasta 3 usuarios</p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li>✓ Comandas digitales</li>
                                <li>✓ Menú QR</li>
                                <li>✓ Reportes básicos</li>
                                <li>✓ Alérgenos UE</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl p-8 border-2 border-orange-500 relative">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">Más popular</span>
                            <h3 className="font-bold text-lg mb-1">Pro</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Para crecer</p>
                            <div className="text-4xl font-bold mb-1">€49<span className="text-lg font-normal text-slate-400">/mes</span></div>
                            <p className="text-slate-400 text-sm mb-6">1 local · usuarios ilimitados</p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li>✓ Todo lo del básico</li>
                                <li>✓ Usuarios ilimitados</li>
                                <li>✓ Reportes avanzados</li>
                                <li>✓ Soporte prioritario</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-lg mb-1">Multi</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Para cadenas</p>
                            <div className="text-4xl font-bold mb-1">€79<span className="text-lg font-normal text-slate-400">/mes</span></div>
                            <p className="text-slate-400 text-sm mb-6">Hasta 3 locales</p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li>✓ Todo lo del Pro</li>
                                <li>✓ Hasta 3 locales</li>
                                <li>✓ Panel unificado</li>
                                <li>✓ Soporte dedicado</li>
                            </ul>
                        </div>

                    </div>
                    <div className="text-center mt-10">
                        <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                            Empezar 7 días gratis
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-100 dark:border-slate-800 py-8">
                <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-xs">C</span>
                        </div>
                        <span className="font-bold text-sm">Comandio</span>
                    </div>
                    <p className="text-slate-400 text-sm">© 2026 Comandio. Todos los derechos reservados.</p>
                </div>
            </footer>

        </div>
    )
}

export default Landing