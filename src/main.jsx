import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },

            // {
            //     path: '/stories',
            //     element: <Stories />
            // },

            // {
            //     path: '/features',
            //     element: <Features />
            // },

            // {
            //     path: '/pricing',
            //     element: <Pricing />
            // },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
