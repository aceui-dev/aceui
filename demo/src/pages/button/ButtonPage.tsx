import { useSearchParams, Link } from "react-router-dom";
import DefaultSection from "./sections/DefaultSection";
import DisabledSection from "./sections/DisabledSection";
import VariantsSection from "./sections/VariantsSection";
import ColorsSection from "./sections/ColorsSection";
import SizesSection from "./sections/SizesSection";
import RadiusSection from "./sections/RadiusSection";
import LoadingSection from "./sections/LoadingSection";
import IconSection from "./sections/IconSection";
import CombinationsSection from "./sections/CombinationsSection";
import { useSidebar } from "../../contexts/SidebarContext";

const SECTIONS = [
  { id: "default", label: "Default", component: DefaultSection },
  { id: "variants", label: "Variants", component: VariantsSection },
  { id: "colors", label: "Colors", component: ColorsSection },
  { id: "sizes", label: "Sizes", component: SizesSection },
  { id: "radius", label: "Radius", component: RadiusSection },
  { id: "disabled", label: "Disabled", component: DisabledSection },
  { id: "loading", label: "Loading", component: LoadingSection },
  { id: "icon", label: "Icon", component: IconSection },
  { id: "combinations", label: "Combinations", component: CombinationsSection },
];

export default function ButtonPage() {
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
              to={`/button?t=${section.id}`}
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
          AceUI · Button
        </h1>
        <CurrentComponent />
      </main>
    </div>
  );
}
