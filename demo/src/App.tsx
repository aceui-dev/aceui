import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import ButtonPage from "./pages/button/ButtonPage";
import HomePage from "./pages/HomePage";
import { COMPONENTS } from "./constants";
import { SidebarProvider, useSidebar } from "./contexts/SidebarContext";

function Navigation() {
  const location = useLocation();
  const { toggle } = useSidebar();

  // Pages that have sidebars (use page-layout class)
  const pagesWithSidebar = ["/button"];
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
