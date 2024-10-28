import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routes } from './App'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <ToastContainer autoClose={3000}/>
    <RouterProvider router={routes}/>
  </StrictMode>
)
