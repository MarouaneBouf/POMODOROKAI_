import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  RouteProps,
} from "react-router-dom";
import { LandingPage } from "./pages/landing_page";
import { ThemeProvider } from "@/components/theme-provider";
import { Login } from "./pages/auth";

function App() {
  function PrivateRoute({ element }: RouteProps) {
    const localData = localStorage.getItem(
      "sb-wyptnkujsyjllyisxrfo-auth-token"
    );
    return localData ? element : <Navigate to="/login" />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/work" element={<PrivateRoute element={<Login />} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
