import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function DisabledSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Disabled keys</h2>
      <p>Specific items can be disabled from interaction.</p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion disabledKeys={["2"]}>
            <AccordionItem itemKey="1" title="Enabled Item">
              You can click this.
            </AccordionItem>
            <AccordionItem itemKey="2" title="Disabled Item">
              You cannot interact with this.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Enabled Item">
              You can click this too.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
