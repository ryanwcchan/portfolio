import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import Error404 from './pages/Error404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '*',
        element: <Error404 />
      },
      {
        index: true,
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <ProjectsPage />
      }, 
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "work",
        element: <Work />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
