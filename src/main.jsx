import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Details from './component/Details.jsx';
import Form from './component/Form.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Routes>
        
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
