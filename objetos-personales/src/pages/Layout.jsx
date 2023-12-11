import React from 'react'
import {Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <main className='flex flex-row h-screen w-2/5' >
      <aside className='bg-slate-600 w-2/5'>
      <h1>Contenido</h1>
        <div><Link to={'/'}>Inicio</Link></div>
        <div><Link to={'/registro'}>Registrar</Link></div>
      </aside>
      <div>
        <Outlet/>
      </div>
  </main>
  )
}

export default Layout