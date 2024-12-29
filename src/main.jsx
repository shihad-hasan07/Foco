import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './utils/Routes.jsx'
import AuthProvider from './authprovider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider allRoutes={<RouterProvider router={router}></RouterProvider>}></AuthProvider>
    <ToastContainer
      position="top-center"
      autoClose={300}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClickrtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  </StrictMode>,
)
