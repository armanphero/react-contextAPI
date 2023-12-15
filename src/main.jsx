import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Orders from './components/Orders.jsx';
import ContextAPI from './components/contextAPI.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json')
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/contextapi',
        element: <ContextAPI /> 
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
