import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './Shera/Router/Router'
import AuthProvider from './Shera/Auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={routers}/>
    </AuthProvider>
  </React.StrictMode>,
)
