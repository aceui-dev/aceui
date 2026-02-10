import { Badge } from "@aceuidev/badge";

export default function SizesSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Sizes</h2>
      <p>Small (max-height 24px), medium (28px), large (32px).</p>
      <div className="demo-row">
        <Badge size="small">Small</Badge>
        <Badge size="medium">Medium</Badge>
        <Badge size="large">Large</Badge>
      </div>
    </section>
  );
}
