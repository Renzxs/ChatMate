import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Register from './Register.jsx';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.withCredentials = true;

  return (
    <>
      <Register />
    </>
  )
}

export default App
