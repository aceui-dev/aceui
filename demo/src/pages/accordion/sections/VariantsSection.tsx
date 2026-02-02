import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function VariantsSection() {
  return (
    <section className="demo-section">
      <h2>Accordion · Variants</h2>
      <p>Different visual variants: light, shadow, bordered, and splitted.</p>
      <div className="demo-row" style={{ flexDirection: "column", gap: "2rem" }}>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Light (default)</h3>
          <div style={{ maxWidth: 400 }}>
          <Accordion variant="light">
            <AccordionItem itemKey="1" title="Item 1">Content</AccordionItem>
            <AccordionItem itemKey="2" title="Item 2">Content</AccordionItem>
          </Accordion>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Shadow</h3>
          <div style={{ maxWidth: 400 }}>
          <Accordion variant="shadow">
            <AccordionItem itemKey="1" title="Item 1">Content</AccordionItem>
            <AccordionItem itemKey="2" title="Item 2">Content</AccordionItem>
          </Accordion>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Bordered</h3>
          <div style={{ maxWidth: 400 }}>
          <Accordion variant="bordered">
            <AccordionItem itemKey="1" title="Item 1">Content</AccordionItem>
            <AccordionItem itemKey="2" title="Item 2">Content</AccordionItem>
          </Accordion>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Splitted</h3>
          <div style={{ maxWidth: 400 }}>
          <Accordion variant="splitted">
            <AccordionItem itemKey="1" title="Item 1">Content</AccordionItem>
            <AccordionItem itemKey="2" title="Item 2">Content</AccordionItem>
          </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
