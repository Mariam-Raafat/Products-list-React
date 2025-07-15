import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './components/router.jsx';
// import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import store from './components/stor/store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >

   
    <AuthProvider>
   
   <RouterProvider router={router}/>
  
    </AuthProvider>
     </Provider>
  </StrictMode>,
)
