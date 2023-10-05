import { LandingPage } from "./pages/landing_page";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {<LandingPage />}
    </ThemeProvider>
  );
}

export default App;
