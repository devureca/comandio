import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ProtectedRoute } from './ProtectedRoute'

import Landing from '../pages/landing/Landing'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import VerifyEmail from '../pages/auth/VerifyEmail'

import AdminDashboard from '../pages/admin/AdminDashboard'
import NegocioDashboard from '../pages/negocio/NegocioDashboard'
import MozoView from '../pages/mozo/MozoView'
import CocinaView from '../pages/cocina/CocinaView'
import MenuQR from '../pages/menu/MenuQR'

const RoleRedirect = () => {
    const { perfil } = useAuth()
    if (!perfil) return <Navigate to="/login" replace />
    const routes = {
        superadmin: '/admin',
        dueno: '/negocio',
        mozo: '/mozo',
        cocina: '/cocina',
    }
    return <Navigate to={routes[perfil.rol] || '/login'} replace />
}

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/verify-email" element={<VerifyEmail />} />
        <Route path="/auth/callback" element={<RoleRedirect />} />
        <Route path="/menu/:negocioId" element={<MenuQR />} />

        <Route path="/dashboard" element={<ProtectedRoute><RoleRedirect /></ProtectedRoute>} />

        <Route path="/admin/*" element={
            <ProtectedRoute roles={['superadmin']}>
                <AdminDashboard />
            </ProtectedRoute>
        } />

        <Route path="/negocio/*" element={
            <ProtectedRoute roles={['dueno']}>
                <NegocioDashboard />
            </ProtectedRoute>
        } />

        <Route path="/mozo/*" element={
            <ProtectedRoute roles={['mozo']}>
                <MozoView />
            </ProtectedRoute>
        } />

        <Route path="/cocina/*" element={
            <ProtectedRoute roles={['cocina']}>
                <CocinaView />
            </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
)

export default AppRoutes