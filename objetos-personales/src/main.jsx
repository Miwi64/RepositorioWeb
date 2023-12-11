import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout'
import Registrar from './pages/Registrar'
import Admin from './pages/admin'

const rutas = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/registro',
          element: <Registrar/>
        }
      ]
    },
    {
      path: '/admin',
      element: <Admin/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas}/>
  </React.StrictMode>,
)
