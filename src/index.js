import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { store } from './app/store'
import Header from './app/components/header'
import App from './app/App'
import ErrorScreen from './app/components/error-screen'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='min-h-full'>
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
)
