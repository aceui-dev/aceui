import { Accordion, AccordionItem } from "@aceuidev/accordion";

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
  </svg>
);

export default function CustomIndicatorSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Custom indicator</h2>
      <p>
        Use the <code>indicator</code> prop on <code>AccordionItem</code> to show a custom expand/collapse icon. It can be a <code>ReactNode</code> or a function that receives <code>isOpen</code>, <code>isDisabled</code>, and <code>defaultIndicator</code>.
      </p>
      <div className="demo-row" style={{ flexDirection: "column", gap: "1.5rem", alignItems: "stretch" }}>
        <div>
          <h3 className="demo-subtitle">Custom node</h3>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Accordion>
              <AccordionItem itemKey="1" title="Plus / minus" indicator={<PlusIcon />}>
                This item uses a custom plus icon that rotates to minus when expanded.
              </AccordionItem>
              <AccordionItem itemKey="2" title="Another custom" indicator={<MinusIcon />}>
                Custom indicators still animate with expand/collapse state.
              </AccordionItem>
              <AccordionItem itemKey="3" title="Default (no custom)">
                This item uses the default chevron indicator.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>
          <h3 className="demo-subtitle">Indicator as function</h3>
          <p className="demo-caption">
            Plus when closed, minus when open; disabled item shows the default indicator.
          </p>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Accordion disabledKeys={["2"]}>
              <AccordionItem
                itemKey="1"
                title="Expandable"
                indicator={({ isOpen, isDisabled, defaultIndicator }) =>
                  isDisabled ? defaultIndicator : isOpen ? <MinusIcon /> : <PlusIcon />
                }
              >
                The indicator switches between plus (closed) and minus (open) via the render function.
              </AccordionItem>
              <AccordionItem
                itemKey="2"
                title="Disabled item"
                indicator={({ isOpen, isDisabled, defaultIndicator }) =>
                  isDisabled ? defaultIndicator : isOpen ? <MinusIcon /> : <PlusIcon />
                }
              >
                This item is disabled; the function returns defaultIndicator when isDisabled is true.
              </AccordionItem>
              <AccordionItem itemKey="3" title="Also with function">
                This item uses the default chevron (no custom indicator).
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
