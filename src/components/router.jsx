import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './HomePage/homePage';
import { ProductDetails } from './product-details/Product-details';
import { CartPage } from './cart/CartPage';
import { LoginPage } from './login/LoginPage';
import { RegisterPage } from './register/RegisterPage';
import { ProductsList } from './products-list/Products-list';
import ProtectedRoute from './protectedRoute';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,
         element: <HomePage /> 
        },
     {
        path:'product-details/:id',
        element: <ProductDetails/> 
     },
     {
        path: 'cart',
       
        element:(
        <ProtectedRoute>
         <CartPage />
        </ProtectedRoute>
        )
     },
     {
        path:'login',
        element: <LoginPage /> 
     }, 
    {
        path:'register',
        element: <RegisterPage/> 
     },
     {
        path:'products-list',
        element: <ProductsList/> 
     }
    ]
  }
]);
