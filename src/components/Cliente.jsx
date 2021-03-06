import { Link } from 'react-router-dom'

const Cliente = ({ cliente, handleDelete }) => {
  const { nombre, empresa, email, telefono, id } = cliente

  return (
    <tr className='border-b hover:bg-gray-50'>
      <td className='p-3'>{nombre}</td>
      <td className='p-3'>
        <p>
          <span className='text-gray-800 uppercase font-bold'>Email:</span>
          {email}
        </p>
        <p>
          <span className='text-gray-800 uppercase font-bold'>Tel:</span>
          {telefono}
        </p>
      </td>
      <td className='p-3'>{empresa}</td>
      <td className='p-3'>
        <Link
          to={`/clientes/${id}`}
          type='button'
          className='text-center bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-sx mt-3'
        >
          Ver
        </Link>
        <Link
          to={`/clientes/editar/${id}`}
          type='button'
          className='text-center bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-sx mt-3'
        >
          Editar
        </Link>
        <button
          type='button'
          className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-sx mt-3'
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Cliente
