import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import ButtonPage from "./pages/button/ButtonPage";
import AccordionPage from "./pages/accordion/AccordionPage";
import BadgePage from "./pages/badge/BadgePage";
import HomePage from "./pages/HomePage";
import { COMPONENTS } from "./constants";
import { SidebarProvider, useSidebar } from "./contexts/SidebarContext";
import { useTheme } from "./contexts/ThemeContext";

function Navigation() {
  const location = useLocation();
  const { toggle } = useSidebar();
  const { theme, setTheme } = useTheme();

  // Pages that have sidebars (use page-layout class)
  const pagesWithSidebar = ["/button", "/accordion", "/badge"];
  const hasSidebar = pagesWithSidebar.includes(location.pathname);

  return (
    <nav className="navbar">
      <button
        className="sidebar-toggle"
        onClick={hasSidebar ? toggle : undefined}
        disabled={!hasSidebar}
        aria-label="Toggle sidebar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <Link to="/" className={`link ${location.pathname === "/" ? "active" : ""}`}>AceUI</Link>
      {COMPONENTS.map((component) => (
        <Link key={component.path} to={component.path} className={`link ${location.pathname === component.path ? "active" : ""}`}>{component.name}</Link>
      ))}
      <div className="navbar__end">
        <div
          className="theme-toggle-button"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 3l0 18" />
            <path d="M12 9l4.65 -4.65" />
            <path d="M12 14.3l7.37 -7.37" />
            <path d="M12 19.6l8.85 -8.85" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div>
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/badge" element={<BadgePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </BrowserRouter>
  );
}
