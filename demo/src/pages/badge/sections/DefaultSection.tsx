import { Badge } from "@aceuidev/badge";

export default function DefaultSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Default</h2>
      <p>Default badge with solid variant, primary color, medium size, and full radius.</p>
      <div className="demo-row">
        <Badge>Default</Badge>
        <Badge variant="solid" color="primary">Solid Primary</Badge>
      </div>
    </section>
  );
}
