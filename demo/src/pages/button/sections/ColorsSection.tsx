import { Button } from "@aceuidev/button";

export default function ColorsSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Button · Colors</h2>
      <p>Six color schemes available for all variants.</p>
      <div className="demo-row">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </section>
  );
}
