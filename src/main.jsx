import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './utils/Routes.jsx'
import AuthProvider from './authprovider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AppRoot() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate app initialization delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
      }}>
        <div className='flex gap-10'>
          <div class="loader"></div>
          <div class="loader"></div>
          <div class="loader"></div>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider allRoutes={<RouterProvider router={router} />}></AuthProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
    <ToastContainer
      position="top-center"
      autoClose={300}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>,
);
