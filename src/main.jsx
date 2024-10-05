import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Video from './components/Video.jsx'
import Login from './components/Login.jsx'
import SignIn from './components/SignIn.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/nav.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Video/:id",
    element: <Video></Video>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/sign",
    element: <SignIn></SignIn>,
  },
  {
    path: "/nav",
    element: <Nav></Nav>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
