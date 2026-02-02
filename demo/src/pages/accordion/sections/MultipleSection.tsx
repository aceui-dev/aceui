import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function MultipleSection() {
  return (
    <section className="demo-section">
      <h2>Accordion · Multiple expansion</h2>
      <p>Multiple items can be expanded at the same time.</p>
      <div className="demo-row">
        <div style={{ maxWidth: 400 }}>
          <Accordion selectionMode="multiple" defaultExpandedKeys={["1"]}>
            <AccordionItem itemKey="1" title="Item 1">
              Content 1. You can keep this open and expand others too.
            </AccordionItem>
            <AccordionItem itemKey="2" title="Item 2">
              Content 2.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Item 3">
              Content 3.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
