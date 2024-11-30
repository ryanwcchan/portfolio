import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import ContactPage from './pages/ContactPage.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import Error404 from './pages/Error404.jsx'
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx'

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
        path: "projects/:title",
        element: <ProjectDetailsPage />
      },
      {
        path: "contact",
        element: <ContactPage />
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
