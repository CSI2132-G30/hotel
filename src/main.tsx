import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import App from './App.tsx'
import './index.css'

/*Displays the App component*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
