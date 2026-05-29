import { Routes, Route } from 'react-router-dom'
import DuenoLayout from '../../components/layout/DuenoDashboard'

import Inicio from './Inicio'
import Mesas from './Mesas'
import Menu from './Menu'
import Personal from './Personal'
import Pedidos from './Pedidos'
import Pagos from './Pagos'
import Soporte from './Soporte'

const NegocioDashboard = () => (
    <Routes>
        <Route element={<DuenoLayout />}>
            <Route index element={<Inicio />} />
            <Route path="mesas" element={<Mesas />} />
            <Route path="menu" element={<Menu />} />
            <Route path="personal" element={<Personal />} />
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="pagos" element={<Pagos />} />
            <Route path="soporte" element={<Soporte />} />
        </Route>
    </Routes>
)

export default NegocioDashboard