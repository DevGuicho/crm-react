import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerCliente = () => {
  const [cliente, setCliente] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const obtenerClienteAPI = async (id) => {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await window.fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {}
    }

    obtenerClienteAPI(id).then(() => setLoading(false))
  }, [id])

  if (loading) return <Spinner />

  if (Object.keys(cliente).length === 0) return <h1>No hay resultados</h1>

  return (
    <div>
      <h1 className='text-blue-500 text-4xl font-black'>
        Ver Cliente: {cliente.nombre}
      </h1>
      <p className='mt-3 mb-10'>Información del cliente</p>
      <p className='text-4xl text-gray-600 mb-5'>
        <span className='text-gray-800 uppercase font-bold'>Cliente: </span>
        {cliente.nombre}
      </p>
      <p className='text-2xl text-gray-600 mb-5'>
        <span className='text-gray-800 uppercase font-bold'>Email: </span>
        {cliente.email}
      </p>
      {cliente.telefono && (
        <p className='text-2xl text-gray-600 mb-5'>
          <span className='text-gray-800 uppercase font-bold'>Telefono: </span>
          {cliente.telefono}
        </p>
      )}
      <p className='text-2xl text-gray-600 mb-5'>
        <span className='text-gray-800 uppercase font-bold'>Empresa: </span>
        {cliente.empresa}
      </p>
      {cliente.notas && (
        <p className='text-2xl text-gray-600 mb-5'>
          <span className='text-gray-800 uppercase font-bold'>Notas: </span>
          {cliente.notas}
        </p>
      )}
    </div>
  )
}

export default VerCliente
