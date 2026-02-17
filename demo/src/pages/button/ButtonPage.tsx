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
import ButtonGroupSection from "./sections/ButtonGroupSection";
import ButtonGroupOrientationSection from "./sections/ButtonGroupOrientationSection";
import ButtonGroupDisabledSection from "./sections/ButtonGroupDisabledSection";
import WidthSection from "./sections/WidthSection";
import { useSidebar } from "../../contexts/SidebarContext";

const SECTIONS = [
  { id: "default", label: "Default", component: DefaultSection },
  { id: "variants", label: "Variants", component: VariantsSection },
  { id: "colors", label: "Colors", component: ColorsSection },
  { id: "sizes", label: "Sizes", component: SizesSection },
  { id: "radius", label: "Radius", component: RadiusSection },
  { id: "width", label: "Custom Width", component: WidthSection },
  { id: "disabled", label: "Disabled", component: DisabledSection },
  { id: "loading", label: "Loading", component: LoadingSection },
  { id: "icon", label: "Icon", component: IconSection },
  { id: "combinations", label: "Combinations", component: CombinationsSection },
  { id: "button-group", label: "Button Group", component: ButtonGroupSection },
  { id: "group-orientation", label: "Group Orientation", component: ButtonGroupOrientationSection },
  { id: "group-disabled", label: "Group Disabled", component: ButtonGroupDisabledSection },
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
        <h1 className="page-heading">AceUI · Button</h1>
        <CurrentComponent />
      </main>
    </div>
  );
}
