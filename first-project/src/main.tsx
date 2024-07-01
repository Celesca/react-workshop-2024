import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WrappedRoute from './components/WrappedRoute.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrappedRoute />
  </React.StrictMode>,
)
