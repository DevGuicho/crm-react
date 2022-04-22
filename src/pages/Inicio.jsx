import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente'

const Inicio = () => {
  const [clientes, setClientes] = useState([])

  const handleDelete = async (id) => {
    const confirmar = window.confirm('¿Desear eliminar este cliente?')
    if (confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        await window.fetch(url, {
          method: 'DELETE'
        })
        setClientes((clientes) =>
          clientes.filter((cliente) => cliente.id !== id)
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes'
        const respuesta = await window.fetch(url)
        const resultado = await respuesta.json()
        setClientes(resultado)
      } catch (error) {}
    }
    obtenerClientesAPI()
  }, [])
  return (
    <>
      <h1 className='text-blue-500 text-4xl font-black'>Clientes</h1>
      <p className='mt-3'>Administra tus Clientes</p>
      <table className='w-full mt-5 table-auto sahdow bg-white'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Contacto</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Inicio
