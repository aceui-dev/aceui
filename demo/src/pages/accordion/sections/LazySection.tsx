import { Accordion, AccordionItem } from "@aceuidev/accordion";
import { useEffect } from "react";

export default function LazySection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Lazy render</h2>
      <p>
        With <code>renderStrategy=&quot;lazy&quot;</code>, item content is only rendered when expanded for the first time.
        Use this for heavy content or many items to improve initial load.
      </p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion renderStrategy="lazy" defaultExpandedKeys={["1"]}>
            <AccordionItem itemKey="1" title="Initially expanded">
              <LazyContent itemKey="1" content="This panel is expanded by default, so its content was rendered on mount." />
            </AccordionItem>
            <AccordionItem itemKey="2" title="Expand to render">
              <LazyContent itemKey="2" content="This content is only in the DOM after you expand this item (lazy)." />
            </AccordionItem>
            <AccordionItem itemKey="3" title="Also lazy">
              <LazyContent itemKey="3" content="Same here — open me to see content appear." />
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function LazyContent({ itemKey, content }: { itemKey: string, content: string }) {
  useEffect(() => {
    console.log(`${itemKey} content rendered`);
  }, [])

  return (
    <div>
      <p>{content}</p>
    </div>
  );
}