import { Badge } from "@aceuidev/badge";

export default function ColorsSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Colors</h2>
      <p>Six color options using the design token palette.</p>
      <div className="demo-row">
        <Badge color="default">Default</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="danger">Danger</Badge>
      </div>
    </section>
  );
}
