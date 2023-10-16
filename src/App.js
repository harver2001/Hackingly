import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import BlogPage from './pages/BlogPage/BlogPage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage'
import Routes from "./routes/Routes";
import AuthProvider from "./Providers/AuthProvider";



function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
