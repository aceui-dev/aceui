import { useSearchParams, Link } from "react-router-dom";
import DefaultSection from "./sections/DefaultSection";
import DisabledSection from "./sections/DisabledSection";
import CustomStylesSection from "./sections/CustomStylesSection";

const SECTIONS = [
  { id: "default", label: "Default", component: DefaultSection },
  { id: "disabled", label: "Disabled", component: DisabledSection },
  { id: "custom-styles", label: "Custom styles", component: CustomStylesSection },
];

export default function ButtonPage() {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("t") || "default";

  const currentSection = SECTIONS.find((section) => section.id === currentTab) || SECTIONS[0];
  const CurrentComponent = currentSection.component;

  return (
    <div className="page-layout">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          {SECTIONS.map((section) => (
            <Link
              key={section.id}
              to={`/button?t=${section.id}`}
              className={currentTab === section.id ? "sidebar-link active" : "sidebar-link"}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="page-content">
        <h1 style={{ marginTop: 0, marginBottom: "2rem", fontSize: "1.5rem" }}>
          AceUI · Button
        </h1>
        <CurrentComponent />
      </main>
    </div>
  );
}
