import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MyButton from './MyButton.tsx'
import Heading from './Heading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Heading title="Hello World!"/>
    <App />
    <MyButton/>
  </React.StrictMode>,
)
