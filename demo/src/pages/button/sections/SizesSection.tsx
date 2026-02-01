import { Button } from "@aceuidev/button";

export default function SizesSection() {
  return (
    <section className="demo-section">
      <h2>Button · Sizes</h2>
      <p>Three size variants: small, medium (default), and large.</p>
      <div className="demo-row">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </section>
  );
}
