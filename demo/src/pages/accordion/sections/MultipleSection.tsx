import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function MultipleSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Multiple expansion</h2>
      <p>Multiple items can be expanded at the same time.</p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion selectionMode="multiple" defaultExpandedKeys={["1"]}>
            <AccordionItem itemKey="1" title="Item 1">
              Content 1. You can keep this open and expand others too.
            </AccordionItem>
            <AccordionItem itemKey="2" title="Item 2">
              Content 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et nobis officiis sed libero illum, architecto iusto in placeat excepturi ut fugit earum, veniam eum iure dolor. Unde, eligendi nisi.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Item 3">
              Content 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, saepe! Esse at blanditiis accusantium perspiciatis? Vero minus dicta hic asperiores debitis reprehenderit rem earum, nam voluptas facilis delectus tempora officiis.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
