import { Accordion, AccordionItem } from "@aceuidev/accordion";

const PlaceholderIcon = () => (
  <span
    style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--aceui-color-default-200)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.875rem",
    }}
    aria-hidden
  >
    ?
  </span>
);

export default function SubtitleStartContentSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Subtitle &amp; start content</h2>
      <p>
        Items can have a <code>subtitle</code> below the title and <code>startContent</code> (e.g. avatar or icon) before the title.
      </p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion variant="splitted">
            <AccordionItem
              itemKey="1"
              title="Account settings"
              subtitle="Manage profile and security"
              startContent={<PlaceholderIcon />}
            >
              Content for account settings. Subtitle and start content help scan sections quickly.
            </AccordionItem>
            <AccordionItem
              itemKey="2"
              title={<div>Notifications</div>}
              subtitle={<span><b>3</b> unread</span>}
              startContent={<PlaceholderIcon />}
            >
              Notification preferences and unread count in the subtitle.
            </AccordionItem>
            <AccordionItem
              itemKey="3"
              title="Billing"
              subtitle="Current plan: Pro"
              startContent={<PlaceholderIcon />}
            >
              Billing details and plan info.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
