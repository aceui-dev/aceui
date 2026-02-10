import { useState } from "react";
import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function ControlledSection() {
  const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>(["1"]);

  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Controlled</h2>
      <p>
        Use <code>expandedKeys</code> and <code>onExpandedChange</code> to control which items are open from parent state.
      </p>
      <p className="demo-caption">
        <strong>When to use controlled:</strong> Persist open state (e.g. localStorage or URL), drive other UI from which panel is open, programmatically expand/collapse (e.g. “scroll to and open section X”), or track analytics on expand/collapse.
      </p>
      <div className="demo-row" style={{ flexDirection: "column", gap: "1rem", alignItems: "stretch" }}>
        <p className="demo-caption" style={{ margin: 0 }}>
          Currently expanded: <code>{JSON.stringify(expandedKeys)}</code>
        </p>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion
            expandedKeys={expandedKeys}
            onExpandedChange={setExpandedKeys}
            selectionMode="multiple"
          >
            <AccordionItem itemKey="1" title="Controlled item 1">
              Expand/collapse is driven by parent state.
            </AccordionItem>
            <AccordionItem itemKey="2" title="Controlled item 2">
              You can sync this with URL, storage, or other UI.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Controlled item 3">
              Multiple items can be open in this example.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
