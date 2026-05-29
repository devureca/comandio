import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

const menuItems = [
    { to: '/negocio', label: 'Inicio', icon: '🏠', end: true },
    { to: '/negocio/mesas', label: 'Mesas', icon: '🪑' },
    { to: '/negocio/menu', label: 'Menú', icon: '🍽️' },
    { to: '/negocio/personal', label: 'Personal', icon: '👥' },
    { to: '/negocio/pedidos', label: 'Pedidos', icon: '📋' },
    { to: '/negocio/pagos', label: 'Pagos', icon: '💳' },
    { to: '/negocio/soporte', label: 'Soporte', icon: '🎧' },
]

const DuenoLayout = () => {
    const { perfil, signOut } = useAuth()
    const { dark, toggleTheme } = useTheme()
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-100 dark:border-slate-700
        transform transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-auto
      `}>
                <div className="flex flex-col h-full">

                    {/* Logo */}
                    <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-100 dark:border-slate-700">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">C</span>
                        </div>
                        <span className="font-bold text-lg dark:text-white">Comandio</span>
                    </div>

                    {/* Negocio info */}
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700">
                        <p className="text-xs text-slate-400 mb-1">Negocio</p>
                        <p className="font-semibold text-slate-900 dark:text-white text-sm truncate">
                            {perfil?.negocios?.nombre || 'Mi negocio'}
                        </p>
                        <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${perfil?.negocios?.estado === 'activo'
                                ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
                            }`}>
                            {perfil?.negocios?.estado === 'activo' ? 'Activo' : 'Trial'}
                        </span>
                    </div>

                    {/* Nav items */}
                    <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive
                                        ? 'bg-orange-500 text-white'
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                                    }
                `}
                            >
                                <span>{item.icon}</span>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Bottom */}
                    <div className="px-3 py-4 border-t border-slate-100 dark:border-slate-700 space-y-1">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 w-full transition-colors"
                        >
                            <span>{dark ? '☀️' : '🌙'}</span>
                            {dark ? 'Modo claro' : 'Modo oscuro'}
                        </button>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 w-full transition-colors"
                        >
                            <span>🚪</span>
                            Cerrar sesión
                        </button>
                    </div>

                </div>
            </aside>

            {/* Overlay mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Topbar mobile */}
                <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
                    <button onClick={() => setSidebarOpen(true)} className="text-slate-600 dark:text-slate-300">
                        ☰
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">C</span>
                        </div>
                        <span className="font-bold dark:text-white">Comandio</span>
                    </div>
                    <div className="w-8" />
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default DuenoLayout