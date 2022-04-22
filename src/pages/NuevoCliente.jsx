import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
      <h1 className='text-blue-500 text-4xl font-black'>NuevoCliente</h1>
      <p className='mt-3'>
        Llena los siguientes campos para registrar un cliente
      </p>
      <Formulario />
    </>
  )
}

export default NuevoCliente
