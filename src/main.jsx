import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Questions from './pages/Questions.jsx';
import Score from './pages/Score.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>

        <Route element={<App/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='questions' element={<Questions/>}/>
        <Route path='score' element={<Score/>}/>

      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
