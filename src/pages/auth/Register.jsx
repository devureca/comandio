import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useTheme } from '../../context/ThemeContext'

const Register = () => {
    const { dark, toggleTheme } = useTheme()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        negocio: '',
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        if (form.password !== form.confirmPassword) {
            setError('Las contraseñas no coinciden')
            return
        }

        if (form.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres')
            return
        }

        setLoading(true)

        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: form.email,
                password: form.password,
                options: {
                    data: {
                        nombre: form.nombre,
                        negocio: form.negocio,
                    }
                }
            })

            if (signUpError) throw signUpError

            if (data.user) {
                // Crear el negocio
                const { data: negocioData, error: negocioError } = await supabase
                    .from('negocios')
                    .insert({
                        nombre: form.negocio,
                        estado: 'trial',
                        trial_inicio: new Date().toISOString(),
                        trial_fin: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                    })
                    .select()
                    .single()

                if (negocioError) throw negocioError

                // Crear el perfil del dueño vinculado al negocio
                const { error: perfilError } = await supabase
                    .from('perfiles')
                    .insert({
                        id: data.user.id,
                        negocio_id: negocioData.id,
                        nombre: form.nombre,
                        rol: 'dueno',
                        activo: true,
                    })

                if (perfilError) throw perfilError
            }

            navigate('/auth/verify-email')

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <div className="flex items-center justify-between mb-8">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">C</span>
                        </div>
                        <span className="font-bold text-lg dark:text-white">Comandio</span>
                    </Link>
                    <button onClick={toggleTheme} className="text-slate-400 hover:text-orange-500 transition-colors">
                        {dark ? '☀️' : '🌙'}
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-8">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Crear cuenta</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">7 días gratis, sin tarjeta de crédito</p>

                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-lg mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Nombre del negocio
                            </label>
                            <input
                                type="text"
                                name="negocio"
                                value={form.negocio}
                                onChange={handleChange}
                                placeholder="Ej: Trattoria Roma"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Tu nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder="Ej: Marco Rossi"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="tu@email.com"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Mínimo 6 caracteres"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Repite tu contraseña"
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors"
                        >
                            {loading ? 'Creando cuenta...' : 'Crear cuenta gratis'}
                        </button>
                    </form>

                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
                        ¿Ya tienes cuenta?{' '}
                        <Link to="/login" className="text-orange-500 hover:text-orange-600 font-medium">
                            Inicia sesión
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Register