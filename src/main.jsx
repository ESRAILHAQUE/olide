import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import EstateDetails from './Components/EstateDetails/EstateDetails';
import ErrorPage from './Components/Error/Error';
import AuthProvider from './Components/Providers/AuthProvider';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import ContactUs from './Components/ContactUs/ContactUs';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home title="Home"></Home>,
        loader: () => fetch('Estates.json')
      },
      {
        path: '/estate/:id',
        element: <EstateDetails title="Estate Details"></EstateDetails>,
        loader: () => fetch('/Estates.json')
      },
      {
        path: '/login',
        element: <Login title="Login"></Login>
      },
      {
        path: '/contact',
        element: <PrivateRoute><ContactUs title="Contact Us"></ContactUs></PrivateRoute>
      },
      {
        path: '/update',
        element: <PrivateRoute><UpdateProfile title="Update Profile"></UpdateProfile></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register title="Register"></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
