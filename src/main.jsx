import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Page1 from './pages/Page1.jsx'
import Page2 from "./pages/Page2.jsx"
import Page3 from './pages/Page3.jsx'
import Page4 from './pages/Page4.jsx'
import Page5 from './pages/Page5.jsx'
import Page6 from './pages/Page6.jsx'
import Page7 from './pages/Page7.jsx'
import Page8 from './pages/Page8.jsx'
import Page9 from './pages/Page9.jsx'
import Page10 from './pages/Page10.jsx'
import Final from './pages/Final.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: '/', element: <Page1/> },
      { path: '/page2', element: <Page2/> },
      { path: '/page3', element: <Page3/> },
      { path: '/page4', element: <Page4/> },
      { path: '/page5', element: <Page5/> },
      { path: '/page6', element: <Page6/> },
      { path: '/page7', element: <Page7/> },
      { path: '/page8', element: <Page8/> },
      { path: '/page9', element: <Page9/> },
      { path: '/page10', element: <Page10/> },
      { path: '/final', element: <Final/> },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
