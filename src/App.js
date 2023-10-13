import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import BlogPage from './pages/BlogPage/BlogPage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage'


const appRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path : '/',
        element : <LandingPage />
      },
      {
        path: '/login',
        element:<LoginPage />
      },
      {
        path: '/signup',
        element:<SignupPage />
      }, {
        path: '/blog',
        element:<BlogPage />
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
