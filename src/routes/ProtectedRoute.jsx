import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const ProtectedRoute = ({ children, roles = [] }) => {
    const { user, perfil, loading } = useAuth()

    if (loading) return <div className="flex items-center justify-center h-screen">Cargando...</div>
    if (!user) return <Navigate to="/login" replace />
    if (roles.length > 0 && !roles.includes(perfil?.rol)) return <Navigate to="/unauthorized" replace />

    return children
}