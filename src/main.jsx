import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KuuuDocument from './KuuuDocument';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KuuuDocument />
  </React.StrictMode>
);
