import { Badge } from "@aceuidev/badge";

export default function VariantsSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Variants</h2>
      <p>Five variants: Solid, Bordered, Light, Shadow, Dot.</p>
      <div className="demo-row">
        <Badge variant="solid" color="primary">Solid</Badge>
        <Badge variant="bordered" color="primary">Bordered</Badge>
        <Badge variant="light" color="primary">Light</Badge>
        <Badge variant="shadow" color="primary">Shadow</Badge>
        <Badge variant="dot" color="primary">Dot</Badge>
      </div>
    </section>
  );
}
