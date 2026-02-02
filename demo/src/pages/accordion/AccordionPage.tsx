import { useSearchParams, Link } from "react-router-dom";
import DefaultSection from "./sections/DefaultSection";
import VariantsSection from "./sections/VariantsSection";
import MultipleSection from "./sections/MultipleSection";
import DisabledSection from "./sections/DisabledSection";
import { useSidebar } from "../../contexts/SidebarContext";

const SECTIONS = [
  { id: "default", label: "Default", component: DefaultSection },
  { id: "variants", label: "Variants", component: VariantsSection },
  { id: "multiple", label: "Multiple", component: MultipleSection },
  { id: "disabled", label: "Disabled", component: DisabledSection },
];

export default function AccordionPage() {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("t") || "default";
  const { isOpen, close } = useSidebar();

  const currentSection = SECTIONS.find((section) => section.id === currentTab) || SECTIONS[0];
  const CurrentComponent = currentSection.component;

  return (
    <div className="page-layout">
      <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={close}></div>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
          {SECTIONS.map((section) => (
            <Link
              key={section.id}
              to={`/accordion?t=${section.id}`}
              className={currentTab === section.id ? "sidebar-link active" : "sidebar-link"}
              onClick={close}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="page-content">
        <h1 style={{ marginTop: 0, marginBottom: "2rem", fontSize: "1.5rem" }}>
          AceUI · Accordion
        </h1>
        <CurrentComponent />
      </main>
    </div>
  );
}
