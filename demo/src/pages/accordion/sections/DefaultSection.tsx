import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function DefaultSection() {
  return (
    <section className="demo-section">
      <h2>Accordion · Default</h2>
      <p>Basic accordion with light variant and single expansion mode.</p>
      <div className="demo-row">
        <div style={{ maxWidth: 400 }}>
        <Accordion>
          <AccordionItem itemKey="1" title="Accordion 1">
            Content for accordion 1. You can put any content here.
          </AccordionItem>
          <AccordionItem itemKey="2" title="Accordion 2">
            Content for accordion 2. Expand and collapse to see the animation.
          </AccordionItem>
          <AccordionItem itemKey="3" title="Accordion 3">
            Content for accordion 3.
          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </section>
  );
}
