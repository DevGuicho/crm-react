import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import Alerta from './Alerta'

const Formulario = () => {
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, 'El nombre es muy corto')
      .max(40, 'El nombre es muy largo')
      .required('Nombre del cliente es obligatorio'),
    empresa: Yup.string().required('Empresa del cliente es obligatorio'),
    email: Yup.string()
      .email('Email no valido')
      .required('Email del cliente es obligatorio'),
    telefono: Yup.number()
      .integer('Numero no valido')
      .positive('Numero no valido')
      .typeError('Telefono no valido'),
    notas: Yup.string()
  })

  return (
    <div className='mt-10 bg-white px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
        Agregar cliente
      </h1>
      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: ''
        }}
        onSubmit={(values) => {
          console.log('enviando formulario')
          console.log(values)
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => (
          <Form className='mt-10'>
            <div className='mb-4'>
              <label htmlFor='nombre' className='text-gray-800'>
                Nombre
              </label>
              <Field
                type='text'
                id='nombre'
                name='nombre'
                placeholder='Nombre del cliente'
                className='mt-2 block w-full p-3 bg-gray-50'
              />
              {errors.nombre && touched.nombre && (
                <Alerta>{errors.nombre}</Alerta>
              )}
            </div>
            <div className='mb-4'>
              <label htmlFor='empresa' className='text-gray-800'>
                Empresa
              </label>
              <Field
                type='text'
                id='empresa'
                name='empresa'
                placeholder='Empresa del cliente'
                className='mt-2 block w-full p-3 bg-gray-50'
              />
              {errors.empresa && touched.empresa && (
                <Alerta>{errors.empresa}</Alerta>
              )}
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='text-gray-800'>
                Email
              </label>
              <Field
                id='email'
                name='email'
                placeholder='Email del cliente'
                className='mt-2 block w-full p-3 bg-gray-50'
                type='email'
              />
              {errors.email && touched.email && <Alerta>{errors.email}</Alerta>}
            </div>
            <div className='mb-4'>
              <label htmlFor='telefono' className='text-gray-800'>
                Telefono
              </label>
              <Field
                id='telefono'
                name='telefono'
                placeholder='Telefono del cliente'
                className='mt-2 block w-full p-3 bg-gray-50'
                type='tel'
              />
              {errors.telefono && touched.telefono && (
                <Alerta>{errors.telefono}</Alerta>
              )}
            </div>
            <div className='mb-4'>
              <label htmlFor='notas' className='text-gray-800'>
                Notas
              </label>
              <Field
                as='textarea'
                id='notas'
                name='notas'
                placeholder='Notas del cliente'
                className='mt-2 block w-full p-3 bg-gray-50 h-40'
              />
              {errors.notas && touched.notas && <Alerta>{errors.notas}</Alerta>}
            </div>
            <input
              type='submit'
              value='Agregar Cliente'
              className='mt-5 w-full bg-blue-800 p-3 text-white font-bold uppercase text-lg'
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Formulario
