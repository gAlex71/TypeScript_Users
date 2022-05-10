import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import {NavLink} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <div>
      <NavLink to="/users">Пользователи </NavLink>
      <NavLink to="/todos">Список дел</NavLink>
    </div>
    <App />
  </BrowserRouter>
);


