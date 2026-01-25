import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import ButtonPage from "./pages/button/ButtonPage";
import ChipPage from "./pages/chip/ChipPage";
import HomePage from "./pages/HomePage";
import { COMPONENTS } from "./constants";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={`link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
      {COMPONENTS.map((component) => (
        <Link to={component.path} className={`link ${location.pathname === component.path ? "active" : ""}`}>{component.name}</Link>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/chip" element={<ChipPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
