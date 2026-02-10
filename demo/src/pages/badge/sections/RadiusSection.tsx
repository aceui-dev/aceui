import { Badge } from "@aceuidev/badge";

export default function RadiusSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Radius</h2>
      <p>Three radius options: full (pill), medium, small.</p>
      <div className="demo-row">
        <Badge radius="full">Full</Badge>
        <Badge radius="medium">Medium</Badge>
        <Badge radius="small">Small</Badge>
      </div>
    </section>
  );
}
