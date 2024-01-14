import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashobard';
import SuccessFullMissions from './components/SuccessfulMissions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  { path: '/dashboard', element: <Dashboard /> },
  {
    path: '/successFullMissions',
    element: <SuccessFullMissions />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
