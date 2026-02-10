import { Accordion, AccordionItem } from "@aceuidev/accordion";

const PlaceholderIcon = () => (
  <span
    style={{
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "var(--aceui-color-default-200)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.75rem",
    }}
    aria-hidden
  >
    ?
  </span>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
  </svg>
);

export default function CombinationsSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Combinations</h2>
      <p>Examples combining variants, selection mode, lazy render, subtitle, start content, and custom indicators.</p>

      <h3 className="demo-subtitle">Bordered + Multiple</h3>
      <p className="demo-caption">Bordered variant with multiple items open at once.</p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion variant="bordered" selectionMode="multiple" defaultExpandedKeys={["1"]}>
            <AccordionItem itemKey="1" title="First (open by default)">
              Multiple selection allows several panels to stay open. This one starts expanded.
            </AccordionItem>
            <AccordionItem itemKey="2" title="Second">
              You can expand both this and the first item at the same time.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Third">
              Content for the third item.
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <h3 className="demo-subtitle">Splitted + Subtitle + Start content</h3>
      <p className="demo-caption">Splitted variant with subtitle and start content on each item.</p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion variant="splitted">
            <AccordionItem
              itemKey="1"
              title="Profile"
              subtitle="Name, avatar, bio"
              startContent={<PlaceholderIcon />}
            >
              Edit your profile details, avatar, and short bio.
            </AccordionItem>
            <AccordionItem
              itemKey="2"
              title="Security"
              subtitle="Password, 2FA"
              startContent={<PlaceholderIcon />}
            >
              Change password and manage two-factor authentication.
            </AccordionItem>
            <AccordionItem
              itemKey="3"
              title="Preferences"
              subtitle="Theme, language"
              startContent={<PlaceholderIcon />}
            >
              Theme, language, and notification preferences.
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <h3 className="demo-subtitle">Light + Lazy render</h3>
      <p className="demo-caption">Light variant with lazy render; content mounts when expanded.</p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion variant="light" renderStrategy="lazy">
            <AccordionItem itemKey="1" title="Lazy item 1">
              This content was rendered when you expanded the panel (lazy strategy).
            </AccordionItem>
            <AccordionItem itemKey="2" title="Lazy item 2">
              Lazy rendering can improve performance when you have many items or heavy content.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Lazy item 3">
              Third lazy item content.
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <h3 className="demo-subtitle">Custom indicator + Disabled item</h3>
      <p className="demo-caption">Plus/minus indicator with one item disabled.</p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion variant="bordered" disabledKeys={["2"]}>
            <AccordionItem
              itemKey="1"
              title="Expandable"
              indicator={({ isOpen, isDisabled, defaultIndicator }) =>
                isDisabled ? defaultIndicator : isOpen ? <MinusIcon /> : <PlusIcon />
              }
            >
              Custom plus/minus indicator. Expand and collapse to see it change.
            </AccordionItem>
            <AccordionItem itemKey="2" title="Disabled item" indicator={<PlusIcon />}>
              This item is disabled and cannot be expanded.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Default indicator">
              This item uses the default chevron (no custom indicator).
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
