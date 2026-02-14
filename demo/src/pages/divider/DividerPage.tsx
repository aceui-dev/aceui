import { useSearchParams, Link } from "react-router-dom";
import DefaultSection from "./sections/DefaultSection";
import OrientationSection from "./sections/OrientationSection";
import { useSidebar } from "../../contexts/SidebarContext";

const SECTIONS = [
  { id: "default", label: "Default", component: DefaultSection },
  { id: "orientation", label: "Orientation", component: OrientationSection },
];

export default function DividerPage() {
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
              to={`/divider?t=${section.id}`}
              className={currentTab === section.id ? "sidebar-link active" : "sidebar-link"}
              onClick={close}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="page-content">
        <h1 className="page-heading">AceUI · Divider</h1>
        <CurrentComponent />
      </main>
    </div>
  );
}
