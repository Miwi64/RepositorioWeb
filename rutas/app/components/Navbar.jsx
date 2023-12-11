import React from 'react'
import Link from 'next/link'

const rutas = [
  {
    ruta: '/',
    label: 'Inicio'
  },
  {
    ruta: '/about',
    label: 'Acerca de'
  },
  {
    ruta: '/registro',
    label: 'Registro'
  },
]

const Navbar = () => {
  return (
    <nav className='w-full m-0 p-8 bg-black'>
      <ul className='flex justify-evenly'>
        {rutas.map(({ruta, label}) => (
          <li className='text-white inline-block text-2xl font-bold' key={ruta}>
            <Link href={ruta}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar