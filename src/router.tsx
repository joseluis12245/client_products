import { createBrowserRouter } from 'react-router-dom'
import Products from './views/Products'
import Layout from './layouts/Layout'
import NewProduct from './views/NewProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'products/new',
                element: <NewProduct />
            }
        ]
    }
])