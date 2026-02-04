import { Button } from "@aceuidev/button";

export default function WidthSection() {
  return (
    <section className="demo-section">
      <h2>Button · Custom Width</h2>
      <p>
        Use the <code>width</code> prop to set any valid CSS width: rem, px, %, vw, auto, or a number (treated as px).
      </p>
      <div className="demo-row">
        <Button width="4rem">4rem</Button>
        <Button width="auto">auto</Button>
        <Button width="120px">120px</Button>
        <Button width={200}>200 (number)</Button>
      </div>
      <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>100% inside a 280px container:</p>
      <div style={{ width: 280, border: "1px dashed var(--aceui-color-default-300)", borderRadius: 8, padding: 8 }}>
        <Button width="100%">100% width</Button>
      </div>
    </section>
  );
}
