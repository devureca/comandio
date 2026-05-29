import { Link } from 'react-router-dom'

const VerifyEmail = () => (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📧</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Revisa tu email</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
                Te enviamos un link de confirmación. Haz clic en el link para activar tu cuenta y empezar tu prueba gratis de 7 días.
            </p>
            <Link to="/login" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                Volver al inicio de sesión
            </Link>
        </div>
    </div>
)

export default VerifyEmail