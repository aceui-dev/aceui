import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function VariantsSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Variants</h2>
      <p>Different visual variants: light, bordered, and splitted.</p>
      <div className="demo-row" style={{ flexDirection: "column", gap: "1.5rem", alignItems: "stretch" }}>
        <div>
          <h3 className="demo-subtitle">Light (default)</h3>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Accordion variant="light">
              <AccordionItem itemKey="1" title="Item 1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo repellat exercitationem at recusandae, tempora architecto quae cum repellendus sit nesciunt, numquam culpa labore repudiandae ut consequuntur nisi alias? Modi.
              </AccordionItem>
              <AccordionItem itemKey="2" title="Item 2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae maxime laudantium commodi voluptatem quidem cupiditate dolor est, ut sint voluptatum reiciendis aperiam, excepturi eveniet neque, et consectetur molestiae animi.
              </AccordionItem>
              <AccordionItem itemKey="3" title="Item 3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla ut eligendi aliquam officia consequatur quia molestias nisi numquam expedita iure nobis optio, temporibus delectus fuga accusamus? Corporis, ut atque?
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>
          <h3 className="demo-subtitle">Bordered</h3>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Accordion variant="bordered">
              <AccordionItem itemKey="1" title="Item 1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in ipsa assumenda quisquam modi debitis dolorum odio quas iste ducimus quod repellendus fugiat laborum nemo provident, qui quo ea quam!
              </AccordionItem>
              <AccordionItem itemKey="2" title="Item 2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, pariatur inventore. Tempora nostrum suscipit omnis reprehenderit deleniti consequatur quia molestiae accusantium corporis soluta, facilis ipsam provident, delectus sed! Tenetur, cupiditate?
              </AccordionItem>
              <AccordionItem itemKey="3" title="Item 3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla ut eligendi aliquam officia consequatur quia molestias nisi numquam expedita iure nobis optio, temporibus delectus fuga accusamus? Corporis, ut atque?
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>
          <h3 className="demo-subtitle">Splitted</h3>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Accordion variant="splitted">
              <AccordionItem itemKey="1" title="Item 1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla ut eligendi aliquam officia consequatur quia molestias nisi numquam expedita iure nobis optio, temporibus delectus fuga accusamus? Corporis, ut atque?
              </AccordionItem>
              <AccordionItem itemKey="2" title="Item 2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda molestiae minima deleniti quisquam saepe eaque minus ipsum commodi. Iusto, id. Error rerum beatae delectus odio repellendus esse necessitatibus, totam recusandae.
              </AccordionItem>
              <AccordionItem itemKey="3" title="Item 3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla ut eligendi aliquam officia consequatur quia molestias nisi numquam expedita iure nobis optio, temporibus delectus fuga accusamus? Corporis, ut atque?
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
