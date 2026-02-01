import { Button } from "@aceuidev/button";

export default function CombinationsSection() {
  return (
    <section className="demo-section">
      <h2>Button · Combinations</h2>
      <p>Examples of various combinations of variants, colors, sizes, and radius.</p>
      
      <h3>Variants × Colors</h3>
      <div className="demo-row">
        <Button variant="solid" color="primary">Solid Primary</Button>
        <Button variant="bordered" color="secondary">Bordered Secondary</Button>
        <Button variant="light" color="success">Light Success</Button>
        <Button variant="flat" color="warning">Flat Warning</Button>
        <Button variant="shadow" color="danger">Shadow Danger</Button>
        <Button variant="ghost" color="primary">Ghost Primary</Button>
      </div>

      <h3>Sizes × Variants</h3>
      <div className="demo-row">
        <Button size="small" variant="bordered">Small</Button>
        <Button size="medium" variant="bordered">Medium</Button>
        <Button size="large" variant="bordered">Large</Button>
      </div>

      <h3>Radius × Variants</h3>
      <div className="demo-row">
        <Button radius="small" variant="light">Small Radius</Button>
        <Button radius="full" variant="light">Full Radius</Button>
        <Button radius="full" variant="solid" color="primary">Pill Button</Button>
      </div>

      <h3>Complex Combinations</h3>
      <div className="demo-row">
        <Button variant="shadow" color="primary" size="large" radius="full">
          Large Shadow Pill
        </Button>
        <Button variant="bordered" color="danger" size="small" radius="small">
          Small Bordered Danger
        </Button>
        <Button variant="light" color="success" size="medium" radius="large">
          Medium Light Success
        </Button>
      </div>
    </section>
  );
}
