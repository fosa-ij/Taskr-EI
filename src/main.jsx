import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import SignUp from './components/signup-page.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<App />} />
          <Route exact path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
