import React from "react"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./styles.css"
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

