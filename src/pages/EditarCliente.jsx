import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Spinner from '../components/Spinner'

const EditarCliente = () => {
  const [cliente, setCliente] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const obtenerClienteAPI = async (id) => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/clientes/${id}`
        const respuesta = await window.fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {}
    }

    obtenerClienteAPI(id).then(() => setLoading(false))
  }, [id])

  return (
    <>
      <h1 className='text-blue-500 text-4xl font-black'>Editar Cliente</h1>
      <p className='mt-3'>
        Utiliza este formulario para editar datos de un cliente
      </p>
      {loading && <Spinner />}

      {!loading && cliente?.nombre && <Formulario cliente={cliente} />}
      {!loading && !cliente?.nombre && <h1>El cliente no existe</h1>}
    </>
  )
}

export default EditarCliente
