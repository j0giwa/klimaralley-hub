import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './routes/App.jsx'
import Login from './routes/auth/Login.jsx';
import Register from './routes/auth/Register.jsx';
import Flut from './routes/games/Flut.jsx';
import Recycling from './routes/games/Recycling.jsx';
import Wasserarm from './routes/games/Wasserarm.jsx';
import FlutGame from './routes/games/play/FlutGame.jsx';
import RecyclingGame from './routes/games/play/RecyclingGame.jsx';
import WasserarmGame from './routes/games/play/WasserarmGame.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/login",
    element: <Login/>,
  },
  {
    path: "/auth/register",
    element: <Register/>,
  },
  {
    path: "/games/flut",
    element: <Flut />,
  },
  {
    path: "/games/recycling",
    element: <Recycling />,
  },
  {
    path: "/games/wasserarm",
    element: <Wasserarm />,
  },
  {
    path: "/games/play/flut",
    element: <FlutGame />,
  },
  {
    path: "/games/play/recycling",
    element: <RecyclingGame />,
  },
  {
    path: "/games/play/wasserarm",
    element: <WasserarmGame />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
