import { Button } from "@aceuidev/button";

export default function RadiusSection() {
  return (
    <section className="demo-section">
      <h2>Button · Border Radius</h2>
      <p>Four border radius options: small, medium (default), large, and full (pill).</p>
      <div className="demo-row">
        <Button radius="small">Small Radius</Button>
        <Button radius="medium">Medium Radius</Button>
        <Button radius="large">Large Radius</Button>
        <Button radius="full">Full Radius</Button>
      </div>
    </section>
  );
}
