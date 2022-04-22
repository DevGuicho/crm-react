import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IniciarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import EditarCliente from './pages/EditarCliente'
import Inicio from './pages/Inicio'
import LoginForm from './pages/LoginForm'
import NuevoCliente from './pages/NuevoCliente'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IniciarSesion />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path='/clientes' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='nuevo' element={<NuevoCliente />} />
          <Route path='editar/:id' element={<EditarCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
